this.threadID = ThreadID.fromRandom();
// Constructs the key from the parsed in key info
this.keyInfo = {
    key: keyKey,
    secret: keySecret,
    // @ts-ignore
    type: keyType
};
// Setting up the client
this.client = await Client.withKeyInfo(this.keyInfo);
const expiration = new Date(Date.now() + 100 * 1000)
this.clientAuth = await createUserAuth(
    this.keyInfo.key,
    this.keyInfo.secret ?? '',
    expiration
);
Client.withUserAuth(
    this.clientAuth
);
// setting up clients token
let clientToken = await this.client.getToken(
    this.identity
);
this.clientToken = clientToken;
// !!
// Everything above here (besides the threadID generation) is the same for the below code
await this.client.newDB(this.threadID);
await this.client.newCollection(
    this.threadID,
    'basic-content',
    ContentSchema
);
So below what I was trying to change it to list all the threads that exist(there are a lot) and then connect to the first one.Then I get the DBInfo for that thread, and then try to join from that info, but I get an error(which you can see later in the logs).Here is the code of me doing this:
// Everything above this is the same as above example until !!
let threads = await this.client.listThreads();
console.log(threads.listList)
console.log(threads.listList[0].id)
this.threadID = ThreadID.fromString(threads.listList[0].id);
console.log(this.threadID)
let dbInfo = await this.client.getDBInfo(this.threadID);
console.log(dbInfo);
// Works fine until it gets here:
await this.client.joinFromInfo(
    dbInfo
);
// Then I was either loading or generating the user an libp2p identity
// setting up clients token
let clientToken = await this.client.getToken(
    this.identity
);
this.clientToken = clientToken;
await this.client.newDB(this.threadID);
await this.client.newCollection(
    this.threadID,
    'basic-content',
    ContentSchema
);

> (53)[{ … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }]
    > bafkubhlbfs5hjunedvnarfzftqyvrtz6tl6qevexh2vequo76kpb5oa
    > ThreadID { buf: Uint8Array(34) }
> { key: "bxzzvfrzcsqdled7daoaqpxmkjhztaiymvnqxle27nvgvuseg5…4vdp36qxmifplyfoc3psv72xxcqerctiddezrsdrnqmnfati", addrs: Array(4) }

https://github.com/Nicca42/News_Buff_V0.1/blob/feature/4-wiring-front-end-to-back-end/src/utils/ThreadsDbHelper.ts#L127

https://github.com/textileio/js-examples/blob/master/react-native-hub-app/src/checklist.tsx#L143