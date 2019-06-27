const express = require("express");
const app = express();
const path = require('path');
//app.use('/public', express.static('../client/public/'))
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
// app.get("/",(req,res)=>{
//     res.redirect(302,'/public')
// })
app.listen(4000, ()=>{
    console.log("server started")
})