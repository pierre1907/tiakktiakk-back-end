const express= require("express");
const bodyParser= require("body-parser");
const router= require("./router/router");
const favicon = require('serve-favicon');
const helmet= require("helmet");
const cors = require('cors');

const app= express();
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(favicon(__dirname + '/favicon.ico'));
app.use(helmet());

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS, DELETE");
    res.setHeader("Vary", "Origin");
    res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
    next();
})
app.use(cors());

app.get('/', (_, res)=> res.sendFile(__dirname + '/index.html'));
app.use("/", router);

module.exports= app;