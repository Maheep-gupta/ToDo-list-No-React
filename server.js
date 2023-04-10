const express = require('express')
const ejs = require('ejs');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))


app.get("/", function (req, res) {
    // res.send("HI")
    res.sendFile(__dirname + "/index.html");
    console.log(req.body)
}
);

app.post("/", function (req, res) {
    console.log(req.body.task)
    res.send("recived")

}
);



app.listen(3000, () => {
    console.log("Server Started SuccessFully");
})