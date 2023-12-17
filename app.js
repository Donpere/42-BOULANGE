// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const config = require('./config');

const app = express();
const port = 8080;

const connection = mysql.createConnection(config.database);

connection.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connexion à la base de données réussie');
});

// Configurations Express et routes ici

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
