const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
// set Template engine

app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
res.render('home');
})

app.listen(PORT,() =>{
    console.log('listening on port 4000');
})
    
 