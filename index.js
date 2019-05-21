var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'node_demo'
});

pool.getConnection(function (err, connection) {
    if (err) throw err;



    var query1 = 'SELECT * FROM`node_demo`.`personne`;';
    connection.query(query1, function (error, results, fields) {
        console.log(results);
        console.log(fields);
        if (error) throw error;
    });


    var post = { nom: 'Soum', prenom: 'AbKar' };
    var query2 = 'INSERT INTO `personne` SET ?';
    connection.query(query2, post, function (error, results, fields) {
        console.log(results);
        console.log(fields);
        if (error) throw error;
    });


    var query3 = `update personne as p  set p.nom= `+ connection.escape('Soumabkar') + `where p.id=`+ connection.escape(7) ;
    connection.query(query3, function (error, results, fields) {
        console.log(results);
        console.log(fields);
        if (error) throw error;
    });


    var query4 = 'delete from node_demo.personne as p where p.id = 7';
    connection.query(query4, function (error, results, fields) {
        console.log(results);
        console.log(fields);
        if (error) throw error;
    });
    connection.release();
});

pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});