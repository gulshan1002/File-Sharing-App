const express = require("express");

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/",(req,res)=>
{
    res.render("home");
});

app.listen(3001, (err)=>
{
    console.log("server is listening on port 3001");
});
