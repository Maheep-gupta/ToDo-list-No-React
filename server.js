const express = require('express')
const ejs = require('ejs');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set(`view engine`, `ejs`);
app.use(express.static('public'))

var taskItems = [];
app.get("/", function (req, res) {
    //get full date
    var today = new Date();
    //set the current date to an integer (saturday==6)
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    var day = today.toLocaleDateString(`en-US`, options);
    res.render(`index`, { newListItems: taskItems, today: day });
}
);

app.post("/", function (req, res) {
    var item = req.body.task;
    console.log(item)
    if (item != "") {
        const firstLetter = item.charAt(0)

        const firstLetterCap = firstLetter.toUpperCase()

        const remainingLetters = item.slice(1)

        item = firstLetterCap + remainingLetters
        taskItems.push(item)
    }

    res.redirect("/")

}
);
app.post("/delete", (req, res) => {
    console.log(req.body.index);
    taskItems.splice(req.body.index, 1);
    res.send(200)
});



app.listen(3000, () => {
    console.log("Server Started SuccessFully");
})