import { Client, ThreadID, Buckets  } from '@textile/hub';
import { Libp2pCryptoIdentity } from '@textile/threads-core';
import { displayIdentity, displayStatus, displayAvatar, displayThreadsList } from './ui';
/**
 * Creates a new random keypair-based Identity
 *
 * The identity will be cached in the browser for later
 * sessions.
 */
const getIdentity = (async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    try {
        if (urlParams.get('force')) {
            window.history.replaceState({}, document.title, "/");
            throw new Error('Forced new identity');
        }
        var storedIdent = localStorage.getItem("identity");
        if (storedIdent === null) {
            throw new Error('No identity');
        }
        const restored = Libp2pCryptoIdentity.fromString(storedIdent);
        return restored;
    }
    catch (e) {
        /**
         * If any error, create a new identity.
         */
        try {
            const identity = await Libp2pCryptoIdentity.fromRandom();
            const identityString = identity.toString();
            localStorage.setItem("identity", identityString);
            return identity;
        }
        catch (err) {
            return err.message;
        }
    }
});
/**
 * More secure method for getting token & API auth.
 *
 * Keeps private key locally in the app.
 */
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
            // const socketUrl = `ws://localhost:3001/ws/userauth`;
            // const socketUrl = `wss://car-insurance-hackfs.herokuapp.com:443/ws/userauth`
            const socketUrl = `wss://vpai.azurewebsites.net:443/ws/userauth`
            /** Initialize our websocket connection */
            const socket = new WebSocket(socketUrl);
            /** Wait for our socket to open successfully */
            socket.onopen = () => {
                /** Get public key string */
                const publicKey = identity.public.toString();
                /** Send a new token request */
                socket.send(JSON.stringify({
                    pubkey: publicKey,
                    type: 'token'
                }));
                /** Listen for messages from the server */
                socket.onmessage = async (event) => {
                    const data = JSON.parse(event.data);
                    switch (data.type) {
                        /** Error never happen :) */
                        case 'error': {
                            reject(data.value);
                            break;
                        }
                        /** The server issued a new challenge */
                        case 'challenge': {
                            /** Convert the challenge json to a Buffer */
                            const buf = Buffer.from(data.value);
                            /** User our identity to sign the challenge */
                            const signed = await identity.sign(buf);
                            /** Send the signed challenge back to the server */
                            socket.send(JSON.stringify({
                                type: 'challenge',
                                sig: Buffer.from(signed).toJSON()
                            }));
                            break;
                        }
                        /** New token generated */
                        case 'token': {
                            resolve(data.value);
                            break;
                        }
                    }
                };
            };
        });
    };
};
/**
 * Method for using the server to create credentials without identity
 */
const createCredentials = async () => {
    const response = await fetch(`/api/userauth`, {
        method: 'GET',
    });
    const userAuth = await response.json();
    return userAuth;
};

export const claimSchema = {
    $id: 'https://example.com/post.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'ClaimCase',
    type: 'object',
    required: ["title", "body", "author", "_id"],
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
        privacy: {
            type: 'boolean'
        },
    },
}

let xthreadID = "bafkyzb556xa3ropixkegiymnckmvd5op54rjgn3lgdalol2hhyznrjy"
let supra = ThreadID.fromString(xthreadID);
const appUniqueId = "1JZ_AAZ_JpYXQiOjE1OTY2NzU4NzksImlzcyI6ImJiYWFyZWlnd2pvYXd1"

export class HubClient {
    constructor() {
        this.sign = async (buf) => {
            if (!this.id) {
                throw Error('No user ID found');
            }
            return this.id.sign(buf);
        };
        this.setupIdentity = async (savedId) => {
            /** Create or get identity */
            // this.id = await getIdentity();
            this.id = savedId;
            /** Contains the full identity (including private key) */
            const identity = this.id.toString();
            /** Render our avatar */
            displayAvatar(identity);
            /** Get the public key */
            const publicKey = this.id.public.toString();
            /** Display the publicKey short ID */
            displayIdentity(publicKey);
        };
        this.listThreads = async () => {
            if (!this.client) {
                throw Error('User not authenticated');
            }
            /** Query for all the user's existing threads (expected none) */
            const result = await this.client.listThreads();
            console.log("client", this.client, ThreadID);
            console.log("listThreads", result, result.listList, result.listList?.length);
            xthreadID = result.listList && result.listList.length ? result.listList[0].id : xthreadID;
            /** Display the results */
            // displayThreadsList(JSON.stringify(result.listList));
            //if no thread make one

            const threadId = await this.startDb()
            console.log("this.threadID hub", this.threadID, threadId)
            this.initCol("claims", claimSchema)
        };
        
        this.createDb = async () => {
            if (!this.client) {
                throw Error('User not authenticated');
            }
            this.threadID = await this.client.newDB()
            if (!localStorage.getItem("ThreadID"))
                localStorage.setItem("ThreadID", this.threadID)
            return this.threadID
        }

        this.initCol = async (collection, schema) => {
            try {
                const r = await this.client.find(supra, collection, {})
                console.log('r :', r)
                console.log('found :', r.instancesList.length)
                return r
            } catch (err) {
                console.log(err);
                await this.client.newCollection(supra, collection, schema);
                console.log('New collection created', collection);
            }
        }

        this.addItem = async (collection, item) => {
            try {
                await this.client.create(supra, collection, [item])
                console.log('success item added')
            } catch (err) {
                console.log('error', err)
                console.log('oops, item not added')
            }
        }

        this.updateItem = async (collection, item) => {
            try {
                await this.client.save(supra, collection, [item])
                console.log('success item updateItem')
            } catch (err) {
                console.log('error', err)
                console.log('oops, item not updateItem')
            }
        }
        this.itemExist = async (collection, id) => {
            try {
                await this.client.has(supra, collection, [id])
                console.log('success item itemExist')
            } catch (err) {
                console.log('error', err)
                console.log('oops, item not itemExist')
            }
        }

        this.getItems = async (collection) => {
            try {
                return await this.client.find(supra, collection, {})
                console.log('success item getItems')
            } catch (err) {
                console.log('error', err)
                console.log('oops, item not getItems')
                return []
            }
        }

        this.getItem = async (collection, id) => {
            try {
                await this.client.findByID(supra, collection, id)
                console.log('success item getItem')
            } catch (err) {
                console.log('error', err)
                console.log('oops, item not getItem')
            }
        }

        this.rmItem = async (collection, id) => {
            try {
                await this.client.delete(supra, collection, [id])
                console.log('success item rmItem')
            } catch (err) {
                console.log('error', err)
                console.log('oops, item not rmItem')
            }
        }
        
        this.startDb = async () => {
            if (!this.client) {
                throw Error('User not authenticated');
            }
            
            // this.threadID = await this.client.newDBFromAddr(xthreadID)
            // if (!localStorage.getItem("ThreadID"))
            //     localStorage.setItem("ThreadID", this.threadID)

            try {
                const dbInfo = await this.client.getDBInfo(ThreadID.fromString(xthreadID))
                console.log("dbInfo", dbInfo);
                // appDbObj = {
                //     db: appdb,
                //     threadId: threadId
                // }
            } catch (err) {
                console.log('threadId here', xthreadID)
                if (xthreadID) {
                    await this.client.newDB(ThreadID.fromString(xthreadID));
                }
                console.log('app DB created');
                // appDbObj = {
                //     db: appdb,
                //     threadId: threadId
                // }
            }
            return this.threadID
        }

        // this.start = async (db, identity) => {
        //     const threadID = ThreadID.fromRandom();
        //     await db.start(identity, { threadID });
        // }

        // this.start = async (db, identity) => {
        //     const threadID = ThreadID.fromRandom();
        //     await db.start(identity, { threadID });
        // }

        /**
         * Provides a full login where
         * - pubkey is shared with the server
         * - identity challenge is fulfilled here, on client
         * - hub api token is sent from the server
         *
         * see index.html for example running this method
         */
        this.sign = async (identity) => {
            const challenge = Buffer.from('Sign this string');

            const credentials = identity.sign(challenge);

            return credentials            
        }

        this.login = async () => {
            if (!this.id) {
                throw Error('No user ID found');
            }
            /** Use the identity to request a new API token when needed */
            const loginCallback = loginWithChallenge(this.id);
            this.client = Client.withUserAuth(loginCallback);
            console.log('Verified on Textile API');
            displayStatus();
        };
        /**
         * Provides a basic auth where
         * - the server doesn't care about the user identity
         * - the server just provides user auth on any request
         *
         * see simple.html for example running this method
         */
        this.simpleAuth = async () => {
            if (!this.id) {
                throw Error('No user ID found');
            }
            /** Use the simple auth REST endpoint to get API access */
            /** The simple auth endpoint generates a user's Hub API Token */
            const client = Client.withUserAuth(createCredentials);
            /** getToken will get and store the user token in the Client */
            await client.getToken(this.id);
            /** Update our auth to include the token */
            this.client = client;
            console.log('Verified on Textile API');
            displayStatus();
        };
    }
} 
