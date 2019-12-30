import express from "express"
import cors from "cors";
import * as functions from "firebase-functions"
import * as bodyParser from "body-parser";

const app = express();
app.use(cors({origin: true}));

app.get('/', bodyParser.urlencoded({extended: false}), (req, res) => {
    return res.send("hello world");
});

exports.sample = functions.https.onRequest(app);
