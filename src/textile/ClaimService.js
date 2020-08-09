import { Database, ThreadID } from "@textile/hub";
import { getIdentity } from './helpers';
import { fromEvent } from 'rxjs';
// We'll use this directly to delete our dbs when needed
const level = require("level");
const dbName = "threads.claims.cases";
export class ClaimService {
    constructor() {
        this.init = async () => {
            // Create or restore identity from localStorage
            this.identity = await getIdentity();
            /* You'll need to include this information in your app */
            const key = { key: process.env.REACT_APP_API_KEY || '' };
            // We could also consider prefixing the db by identity (or some # of chars from the public key)
            this.db = await Database.withKeyInfo(key, dbName, undefined, process.env.REACT_APP_API); // final variable can be undefined
            await this.createCollection();
            return this;
        };
        
    }
    /**
     * Provides an Observable to wire into the UI state
     */
    onMessage() {
        if (!this.db) {
            throw new Error('DB not setup');
        }
        return fromEvent(this.db.emitter, 'claim-cases.*.0');
    }
    /**
     * disconnect - used when unmounting
     */
    disconnect() {
        if (!this.db) {
            return;
        }
        this.db.close();
    }
}
export const claimSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    definitions: {
        ClaimCase: {
            title: "ClaimCase",
            type: "object",
            properties: {
                _id: {
                    type: "string",
                },
                title: {
                    type: "string",
                },
                body: {
                    type: "string",
                },
                author: {
                    type: "string",
                },
            },
            required: ["title", "body","author", "_id"],
        },
    },
};

// https://car-insurance-hackfs.herokuapp.com/


const loginWithChallenge = (identity) => {
    // we pass identity into the function returning function to make it
    // available later in the callback
    return () => {
        return new Promise((resolve, reject) => {
            /** 
             * Configured for our development server
             * 
             * Note: this should be upgraded to wss for production environments.
             */

            const socketUrl = `wss://car-insurance-hackfs.herokuapp.com*/ws/userauth`

            /** Initialize our websocket connection */
            const socket = new WebSocket(socketUrl)

            /** Wait for our socket to open successfully */
            socket.onopen = () => {
                /** Get public key string */
                const publicKey = identity.public.toString();
                console.log('publickey', publicKey)
                /** Send a new token request */
                socket.send(JSON.stringify({
                    pubkey: publicKey,
                    type: 'token'
                }));

                /** Listen for messages from the server */
                socket.onmessage = async (event) => {
                    const data = JSON.parse(event.data)
                    console.log('data', data)
                    switch (data.type) {
                        /** Error never happen :) */
                        case 'error': {
                            reject(data.value);
                            break;
                        }
                        /** The server issued a new challenge */
                        case 'challenge': {
                            /** Convert the challenge json to a Buffer */
                            const buf = Buffer.from(data.value)
                            /** User our identity to sign the challenge */
                            const signed = await identity.sign(buf)
                            /** Send the signed challenge back to the server */
                            socket.send(JSON.stringify({
                                type: 'challenge',
                                sig: Buffer.from(signed).toJSON()
                            }));
                            break;
                        }
                        /** New token generated */
                        case 'token': {
                            resolve(data.value)
                            break;
                        }

                    }

                }

            }

        })
    }
}