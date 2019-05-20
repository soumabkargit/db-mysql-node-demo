var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node-demo'
});

pool.getConnection(function (err, connection) {
    if (err) throw err; 
    var query1 = 'SELECT * FROM`node-demo`.`personne`;';
    connection.query(query1, function (error, results, fields) {
        connection.release();
        if (error) throw error;
    });


    var post = { nom: 'Soum', prenom: 'AbKar' };
    var query2 = 'INSERT INTO `personne` SET ?';
    connection.query(query2, post, function (error, results, fields) {
        connection.release();
        if (error) throw error;
    });


});

pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});