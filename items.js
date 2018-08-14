var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var router = express.Router();

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/rrs');


var app = express();
//var routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-sub', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
	var str={};
var cursor=db.collection('register').find();
cursor.each(function(err,doc){
	var a=req.body.User_Name;
	var b=req.body.password;
	if(doc!=null){
	var str=doc.User_Name;
	var pwd=doc.Password;
	
	if(a==str){
		if(b==pwd){	
 res.sendFile(__dirname + "/" + "route.html");
}
else{
res.send("Invalid Username");
}
}
}
});
});
 
});
app.post('/regist',function (req,res){
dbConn.then(function(db){
delete req.body._id;
db.collection('register').insertOne(req.body);
res.sendFile(__dirname + "/" + "route.html");
});
});

app.get('/view-reg',  function(req, res) {
    
             res.sendFile(__dirname + "/" + "registration.html");
        
});


app.post('/',function(req,res){
var k=0;
  
		
res.writeHead(200, {
    'Content-Type': 'text/html'
  });
 	res.write('<!doctype html>\n<html lang="en">\n' + 
   	'\n<meta charset="utf-8">\n<title>rrs</title>\n' + 
    '<style>'+
'.submit{'+
    'background-color: red;'+
    'border: none;'+
    'color: white;'+
    'padding: 15px 32px;'+
    'text-align: center;'+
    'text-decoration: none;'+
    'display: inline-block;'+
    'font-size: 16px;'+
    'margin: 4px 2px;'+
    'cursor: pointer;'+
'}'+


'table, th, td {'+
    'border: 1px solid black;'+
    'border-collapse: collapse;'+
	 'background-color: #f1f1c1;'+
  'font-family:Arial,Verdana,sans-serif;'+
  'font-size:1.5em;'+ 
  'color:#00f;'+

'}'+
'header, footer {'+
    'padding: 1em;'+
    'color: white;'+
    'background-color: black;'+
    'clear: left;'+
    'text-align: center;'+
'}'+

'</style>'+
'</head>'+
'<body>'+

'<div class="container">'+

'<header>'+
   
'<h1>Railway Reservation System</h1>'+ 
'</header>');
   
	
		res.write('<table width="80%">');
		
 var start = req.body.start;
   var end=req.body.end;
   var date=req.body.date;
dbConn.then(function(db){

var cursor=db.collection('train').find({stations:{$all:[start,end]}});
cursor.each(function(err,doc){
	
	if(doc!=null){
		var no=doc.no_of_stations;
		var stations=doc.stations;
		for(var i=0;i<=no;i++)
{
		if(stations[i]==start)
		{
		for(var j=0;j<=no;j++)
{
	if(stations[j]==end){
		
		db.collection('trash').insertOne(req.body);
		var t=j-i;
		db.collection('trash').update({start:stations[i]},{$set:{tot_stat:t}});
		res.write('<tr><td><a href="/view-'+doc.train_no+'">'+doc.train_no+'</a></td><td>'+doc.train_name+
		'</td><td>'+doc.no_of_stations+'</td></tr>');
			flag=10;
		}
				}
}


}
		}
				
	});
	
});
		
 
		
});
app.get('/view-train1',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train1";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train2',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train2";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train3',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train3";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train4',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train4";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train5',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train5";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train6',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train6";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train7',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train7";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train8',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train8";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train9',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train9";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train10',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train10";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train11',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train11";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train12',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train12";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.get('/view-train13',  function(req, res) {
dbConn.then(function(db){
	var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$set:{passengers:1}});	   
db.collection('trash').update({_id:id},{$set:{train_no:"train1"}});
		});
	var tr="train13";
	var cursor=db.collection('train').find();
	cursor.each(function(err,doc){
	if(doc!=null){
		if(doc.train_no==tr){
		res.sendFile(__dirname + "/" + "details.html");
		
}
	}
});
});
//res.send("train not found");
});
app.post('/post-pass', function (req, res) {
dbConn.then(function(db) {
	 p=req.body.pn1;
	 a=req.body.pa1;
	 g=req.body.pg1;
		if(req.body.pn1!=""){
	 db.collection('pass').insert({"_id":1,"passenger_name":p,"passenger_age":a,"passenger_gender":g});
}   	
if(req.body.pn2!="")
{
	p=req.body.pn2;
	a=req.body.pa2;
	g=req.body.pg2;
	 db.collection('pass').insert({"_id":2,"passanger_name":p,"passanger_age":a,"passanger_gender":g});
var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$inc:{passengers:1}});	
});
}
if(req.body.pn3!="")
{
	p=req.body.pn3;
	a=req.body.pa3;
	g=req.body.pg3;
	 db.collection('pass').insert({"_id":3,"passanger_name":p,"passanger_age":a,"passanger_gender":g});
var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$inc:{passengers:1}});	
});
}
if(req.body.pn4!="")
{
	p=req.body.pn4;
	a=req.body.pa4;
	g=req.body.pg4;

	 db.collection('pass').insert({"_id":4,"passanger_name":p,passanger_age:a,passanger_gender:g});
var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$inc:{passengers:1}});	
});
}
if(req.body.pn5!="")
{
	p=req.body.pn5;
	a=req.body.pa5;
	g=req.body.pg5;
	 
	 db.collection('pass').insert({"_id":5,"passanger_name":p,"passanger_age":a,"passanger_gender":g});
var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		var id=doc._id;	
			}
db.collection('trash').update({_id:id},{$inc:{passengers:1}});	
});
}
res.redirect('/vi'); 
 });

});



  app.get('/vi',function(req,res){  
     
  res.write('<!DOCTYPE html>'+
'<html>'+
'<head>'+
'<style>'+
'.submit{'+
    'background-color: red;'+
    'border: none;'+
    'color: white;'+
    'padding: 15px 32px;'+
    'text-align: center;'+
    'text-decoration: none;'+
    'display: inline-block;'+
    'font-size: 16px;'+
    'margin: 4px 2px;'+
    'cursor: pointer;'+
'}'+


'table, th, td {'+
    'border: 1px solid black;'+
    'border-collapse: collapse;'+
	 'background-color: #f1f1c1;'+
  'font-family:Arial,Verdana,sans-serif;'+
  'font-size:1.5em;'+ 
  'color:#00f;'+

'}'+
'header, footer {'+
    'padding: 1em;'+
    'color: white;'+
    'background-color: black;'+
    'clear: left;'+
    'text-align: center;'+
'}'+

'</style>'+
'</head>'+
'<body>'+

'<div class="container">'+

'<header>'+
   
'<h1>Railway Reservation System</h1>'+ 
'</header>');

dbConn.then(function(db){
var cursor=db.collection('trash').find();
	cursor.each(function(err,doc){
	if(doc!=null){	
		res.write('<h1><font color:"red">From:'+doc.start+'<br>To:'+doc.end +'<br>Date:'+doc.date +'<br>Train number:' +doc.train_no);  	
	if(doc.tot_stat>0)
{
	var re= doc.tot_stat*100;
res.write('<table width=60%><tr><th>One passenger:</th><td>'+re+'</td></tr>');
res.write('<tr><th>Number of passengers:</th><td>'+doc.passengers+'</td></tr>');
res.write('<tr><th>Total Amount:</th><td>'+re*doc.passengers+'</td></tr></table>');

}
else{
	var re=doc.tot_stat*-1*100;
	
res.write('</font></h1><table width=60%><tr><td>One passenger:</td><td>'+re+'</td></tr>');
res.write('<tr><td>Number of passengers:</td><td>'+doc.passengers+'</td></tr>');
res.write('<tr><td>Total Amount:</td><td>'+re*doc.passengers+'</td></tr></table>');

res.write('<form action="/tick" method="get"><input type="submit" class="submit" value="pay"></form>');

}





res.write('<footer>'+
'<img src="boi.png" alt="bank of india" style="width:150px;height:150px;">'+
'<img src="sbi.jpg" alt="State Bank of India" style="width:150px;height:150px;">'+
'<img src="andra.png" alt="Andra" style="width:150px;height:150px;">'+
'<img src="cub.png" alt="City union bank" style="width:150px;height:150px;">'+
'<img src="indian.jpg" alt="Indian" style="width:150px;height:150px;">'+
'<img src="sib.png" alt="South indian" style="width:150px;height:150px;">'+
'<img src="axis.png" alt="Axis bank" style="width:150px;height:150px;">'+
'<img src="hdfc.jpg" alt="hdfc" style="width:150px;height:150px;">'+
'<img src="canara.jpg" alt="canara" style="width:150px;height:150px;">'+
'</footer>'+


'</body>'+
'</html>');
    
}
});
}); 

    

});
app.get('/tick',function(req,res)
{
		dbConn.then(function(db){
	
 dbConn.then(function(db) {
	        db.collection('pass').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    });
		});
});
app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
