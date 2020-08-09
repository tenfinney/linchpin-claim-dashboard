import { Libp2pCryptoIdentity } from '@textile/threads-core';
// @ts-ignore
import { uniqueNamesGenerator, animals, colors } from 'unique-names-generator';

const Box = require("3box");

/**
 * Creates a new random keypair-based Identity
 *
 * The identity will be cached in the browser for later
 * sessions.
 */
export const getIdentity = (async () => {
    try {
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

export const getUsername = (async () => {
    try {
        var storedIdent = localStorage.getItem("username");
        if (storedIdent === null) {
            throw new Error('No username');
        }
        return storedIdent;
    }
    catch (e) {
        /**
         * If any error, create a new identity.
         */
        try {
            const shortName = uniqueNamesGenerator({ dictionaries: [animals, colors], length: 1 });
            localStorage.setItem("username", shortName);
            return shortName;
        }
        catch (err) {
            return err.message;
        }
    }
});



export const get3BoxIdentity = async () => {
    /**
     * Initialize the 3Box API uses Metamask
     * This will allow the user to sign their transactions
     * Using Metamask and 3Box directly
     */
    const box = await Box.create(window.ethereum);
    const [address] = await window.ethereum.enable();
    await box.auth([], { address });
    // Note: sometimes, openSpace returns early... caution
    const space = await box.openSpace('io-textile-dropzone');
    await box.syncDone;
    try {
        // We'll try to restore the private key if it's available
        var storedIdent = await space.private.get('identity');
        if (storedIdent === null) {
            throw new Error('No identity');
        }
        const identity = await Libp2pCryptoIdentity.fromString(storedIdent);
        console.log("identity.public.toString()", identity.public.toString());
        return identity;
    }
    catch (e) {
        /**
         * If the stored identity wasn't found, create a new one.
         */
        const identity = await Libp2pCryptoIdentity.fromRandom();
        const identityString = identity.toString();
        await space.private.set('identity', identityString);
        return identity;
    }
};