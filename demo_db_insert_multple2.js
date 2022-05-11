var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "DAVIladino"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users(id,name, favorite_product) VALUES ?";
  var values = [
  
    ['1', 'John','154'],
    ['2', 'peter','154'],
    ['3', 'Amy', '155']
    
  ]; 

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});