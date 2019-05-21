const express = require('express');
const personnes = require('./routes/personnes');
const app =  express();
app.use(express.json()); // req.body
app.use('/api/personnes', personnes);

app.listen(3000, ()=> console.log(`Listening on port ...`));
/*
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


pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});
*/
