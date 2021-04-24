const express = require('express');
const mongoose = require("mongoose");
const port = process.env.PORT || 5554;
const cors = require('cors');
const view = require('./Component/Controller')
const app = express();
// const OFFLINE_DB = "mongodb://localhost/money";
const ONLINE_DB = 
"mongodb+srv://dawodu98:joshua98@cluster0.idt4l.mongodb.net/money?retryWrites=true&w=majority"

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
    console.log(`port is listening`);
})
