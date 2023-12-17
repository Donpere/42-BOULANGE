#!/bin/bash

# Lancement de MariaDB
echo "Lancement de MariaDB..."
sudo service mysql start

# Lancement de Node.js (à adapter selon la commande exacte pour lancer ton serveur)
echo "Lancement du serveur Node.js..."
cd /chemin/vers/ton/projet
node app.js &

# Lancement de Nginx
echo "Lancement de Nginx..."
sudo service nginx start

echo "Services démarrés avec succès!"
