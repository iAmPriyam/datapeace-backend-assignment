const express = require('express');
const fetch = require('node-fetch')
const bodyParser = require('body-parser');
const app = express();
const port=5000;

bodyParser.urlencoded({extended:false});
app.get('/',async (req,res) =>{
    const api = await fetch('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json');
    const json = await api.json();
    res.send("working!");
    await console.log(json)
});

app.listen(port,()=>console.log(`app listening on port ${port}`));