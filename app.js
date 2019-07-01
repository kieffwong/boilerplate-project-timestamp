// Basic required imports for NodeJS
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//Cresate an instance of express for app and instantie bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


//get call to return JSON that format natural and unix date
app.get("/dateValues/:dateVal", function(req,res,next){
var dateVal = req.params.dateVal;

var dateFormattingOptions = {
    year: "numberic",
    month: "long",
    day: "numeric"
};

if (isNaN(dateVal)) {
    var naturalDate = new Date(dateVal);
     naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
     var unixDate = new Date(dateVal).getTime()/1000;
}
else {
    var unixDate = dateVal;
    var naturalDate = new Date(dateVal*1000);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
}
res.json({unix: unixDate, natural: naturalDate});

})

app.listen(3000, function(){
    console.log("work");
});
