let app = require('express')();
let express = require('express');
let http = require('http').createServer(app);
let bodyParser = require('body-parser');

let path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/"));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/sendx',function(req,res){
    let data = req.body.data;
    let dt = JSON.parse(data);

    let shk = dt.shk;
    let vrd_typ = dt.vrd_typ;
    let prs_typ = dt.prs_typ;
    let dy = dt.dy
    let mnt = dt.mnt;
    let yr = dt.yr;
    let qt_dy = dt.qt_dy;
    let qt_gst = dt.qt_gst;
    let esk = dt.esk;
    let omr = dt.omr;
    let vip = dt.vip;
    let des = dt.des; 

    console.log(data)
});

http.listen(4000);

