const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

// Crear una conexión a la base de datos MySQL
const dataBase = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dtBaseEscuela'
});

//Nos conectamos y verificamos la conexión a la base de datos con condicional y mensaje
dataBase.connect((err) => {
	if (err) {
            console.error('No se pudo conectar a la base de datos:', err.message);
            return;
          }
          console.log('Conexión a la BD establecida correctamente.');
});
module.exports = dataBase; 