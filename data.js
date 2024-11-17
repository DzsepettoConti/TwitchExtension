

import { config, https } from ‘firebase-functions’;
import { initializeApp, database } from ‘firebase-admin’;
import { json } from ‘body-parser’;
import cors from ‘cors’;
const app = require(‘express’)();

initializeApp(config().firebase);

app.use(cors({ origin: true }));
app.use(json());

//for creating webhook
app.get(‘**’, (req, res) => {
//looks for challenge from twitch server
if(req.query[‘hub.challenge’] !== (null || undefined)){
res.send(req.query[‘hub.challenge’]);
res.end(‘Webhook instantiated’);
}
});

//handles webhooks
app.post(‘**’, (req, res) => {
//Do Stuff
});

~ This below is what makes it work for firebase ~
export const * FUNCTIONNAME * = https.onRequest((req, res) => {
if (!req.path) {
req.url = /${req.url} // prepend ‘/’
}
return app(req, res);
});

