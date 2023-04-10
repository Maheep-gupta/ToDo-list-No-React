const express = require('express')
const ejs = require('ejs');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {
    // res.send("HI")
    res.sendFile(__dirname+"/index.html");
}
);

// app.post("/", function (req, res) {
    
// }
// );



app.listen(3000, () => {
    console.log("Server Started SuccessFully");
})