const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
    const query1 = 'SELECT * FROM`node_demo`.`personne`;';
    db.query(query1, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});


router.get('/:id', (req, res) => {
    const personneId = req.params.id;
    const query1 = `SELECT *
                    FROM personne
                    where id = ?`;
    db.query(query1, personneId, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

router.post('/', (req, res) => {
    var post = req.body;
    var query2 = 'INSERT INTO `personne` SET ?';
    db.query(query2, post, function (error, results, fields) {
        if (error) throw error;
        const id = results.insertId;
        res.json({...post, id});
    });
});

router.put('/:id', (req, res) => {
    const personneId = parseInt(req.params.id);
    const personneNom = req.body.nom;
    const personnePrenom = req.body.prenom;
    const post = [personneNom, personnePrenom, personneId];
    var query3 = 'update  personne as p set p.nom = ?, p.prenom = ? where p.id = ?';
    db.query(query3, post, function (error, results, fields) {
        if (error) throw error;
        const id = results.insertId;
        res.json({...post, id});
    });
});

router.delete('/:id', (req, res) => {
    const personneId = req.params.id;
    var query4 = 'delete from node_demo.personne as p where p.id = ? ' ;
    db.query(query4, [personneId],function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

module.exports = router;