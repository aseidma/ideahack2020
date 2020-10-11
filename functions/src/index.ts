const functions = require('firebase-functions');
const admin = require('firebase-admin');
const algoliasearch = require('algoliasearch');

const ALGOLIA_APP_ID = 'JZYHS0Z7PP';
const ALGOLIA_ADMIN_KEY = '05462d841d21463cbb000bc60de2e280';
const ALOGOLIA_INDEX_NAME = 'prod_skills';

admin.initializeApp(functions.config().firebase);

exports.firestoreToAlgolia = functions.https.onCall((req: any, res: any) => {
    const arr: string[] = [];
    admin.firestore().collection('skills').get().then((docs: any) => {
        docs.forEach((doc: any) => {
            const skill: any = doc.data();
            arr.push(skill);
        });

        const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
        const index =  client.initIndex(ALOGOLIA_INDEX_NAME);
        
        index.saveObjects(arr, (err: Error, content: any) => {
            if (err) res.status(500);
            
            res.status(200).send(content);
        });
    });
});
