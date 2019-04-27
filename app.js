const express = require('express')
const app = express();
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get("/music", function(req, res) {
    res.render("music");
 });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});