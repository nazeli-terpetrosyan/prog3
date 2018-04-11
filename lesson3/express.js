var express = require("express");
var app = express();

app.use(express.static("prog3"));


app.get("/", function (req, res) {
    res.redirect('./prog3/public/index.html')
});
app.get("/name/:name", function (req, res) {
    var name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
});
app.get("/google/", function (req, res) {
    res.redirect('http://google.com');
});
app.get("/search/:search", function (req, res) {
    var s = req.params.search;
    res.redirect('http://google.com/search?q=' + s);
});
app.get("/*", function(req, res){
    res.send('<h1>404 not found</h1>');
});
app.listen(8080, function () {
    console.log("Example is running on port 8080");
});
