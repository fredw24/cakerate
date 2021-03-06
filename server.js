const express = require("express");
const app = express();
const bp = require("body-parser")

app.use(bp.json())

app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/routes')(app)

app.listen(8000, (err)=>{
    console.log("Listening on port 8000")
})