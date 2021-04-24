require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose");
const port = process.env.PORT || 5554;
const cors = require('cors');
const view = require('./Component/Controller')
const app = express();
// const OFFLINE_DB = "mongodb://localhost/money";
const ONLINE_DB = process.env.MONGO_DB_CONNECTION_STRING;

mongoose.connect(ONLINE_DB,{
    useCreateIndex: true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`Database is active`)
})
app.use(express.json());
app.use("/", view);
app.use(cors())


app.listen(port,()=>{
    console.log(`port is listening ${port}`);
})
