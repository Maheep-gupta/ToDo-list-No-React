const express = require('express')
const ejs = require('ejs');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set(`view engine`, `ejs`);
app.use(express.static('public'))

var taskItems = ["eat apple","study for 2hr"];
app.get("/", function (req, res) {
    //get full date
    var today = new Date();
    //set the current date to an integer (saturday==6)
    var options = {
        weekday: "long",
        day:     "numeric",
        month:   "long",
        year:"numeric"
    };
    var day = today.toLocaleDateString(`en-US`, options);

    res.render(`index`, { newListItems: taskItems,today:day});
}
);

app.post("/", function (req, res) {
    var item = req.body.task;
    console.log(item)
    if (item!="") {
        taskItems.push(item)
    }
    res.redirect("/")

}
);
app.post("/delete",(req,res)=>{
    var close=req.body;
    var close2=req.params['id'];

    taskItems.pop(taskItems[0])
    // console.log(close)
    console.log(close)
    res.redirect("/")
});



app.listen(3000, () => {
    console.log("Server Started SuccessFully");
})