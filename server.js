let app = require('express')();
let express = require('express');
let http = require('http').createServer(app);
let bodyParser = require('body-parser');
let mysql = require('mysql');

let path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/"));

var msc = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "09392983784",
    database: "mwp_app"
  });

  
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

    // SQL Commands to insert data into mehman table 
    let sql = "insert into mehman(shk,vrd_typ,prs_type,dy,mnt,yr,qt_dy,qt_gst,esk,omr,vip,des) values('"+shk+"',"+vrd_typ+","+prs_typ;
    sql = sql + ","+dy+","+mnt+","+yr+","+qt_dy+","+qt_gst+","+esk+",'"+omr+"',"+vip+",'"+des+"')";

    let con=mysql.createConnection(msc);
    con.connect();
    con.query(sql,function(err,data){
        if(err){
            console.log(err);
        }
    });
    con.end();


});

http.listen(4000);

