
var mysql = require('mysql');

const host=""
const username=""
const password=""
const database=""

var con = mysql.createConnection({
    host: host,
    user: username,
    password: password,
    database: database
});

con.connect(function(err) {
    if (err) throw err;
    /*var sql1= "create table chauffeur (_id int NOT NULL AUTO_INCREMENT, mail varchar(255), phone varchar(255), country varchar(255), town varchar(255), adress varchar(255), primary key (_id))";
    var sql2= "create table client (_id int  NOT NULL AUTO_INCREMENT, title varchar(255), origin varchar(255), url varchar(255), image text, primary key (_id))";
    var sql3= "create table commande (_id int  NOT NULL AUTO_INCREMENT, start varchar(255), end varchar(255), job varchar(255), company varchar(255), description varchar(255), primary key (_id))";
    var sql4= "create table facture (_id int  NOT NULL AUTO_INCREMENT, start varchar(255), end varchar(255), place varchar(255), school varchar(255), subject varchar(255), primary key (_id))";
    var sql5= "create table paiement (_id int  NOT NULL AUTO_INCREMENT, name varchar(255), contact varchar(255), subject varchar(255), message varchar(255), date varchar(255), primary key (_id))";
    var sql6= "create table role (_id int  NOT NULL AUTO_INCREMENT, title varchar(255), date varchar(255), place varchar(255), link varchar(255), image text, primary key (_id))";
    var sql7= "create table trajet (_id int  NOT NULL AUTO_INCREMENT, name varchar(255), percentage varchar(255), primary key (_id))";
    var sql8= "create table user (_id int NOT NULL AUTO_INCREMENT, username varchar(255), password varchar(255), primary key (_id))";
    var sql9= "create table vehicule (_id int NOT NULL AUTO_INCREMENT, username varchar(255), password varchar(255), primary key (_id))";
    let arr=[sql1,sql2, sql3,sql4, sql5, sql6, sql7, sql8]
    arr.map((a)=>{
        connection.query(a, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log("created");
        })
    })*/
    console.log("Connected!");
});
 