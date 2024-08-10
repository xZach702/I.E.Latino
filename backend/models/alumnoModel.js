const { query } = require('express');
const db = require('../config/db');

const Alumno = {
      getAll: (callback) => {
            const query = 'Select * from alumnos';
            db.query(query,callback);
      },

      add: (alumno, callback) => {
            const query = `Insert into alumnos (nombre, apellido_paterno, apellido_materno, matricula) values (?, ?, ?, ?)`;
            db.query(query,[alumno.nombre, alumno.apellido_paterno, alumno.apellido_materno, alumno.matricula], callback);
      },

      update: (alumno, callback) => {
            const query = `Update alumnos set nombre = ?, apellido_paterno = ?, apellido_materno = ?, matricula = ? where matricula = ?`;
            db.query(query,[alumno.nombre, alumno.apellido_paterno, alumno.apellido_materno, alumno.matricula, alumno.newMatricula], callback);
      },
      
      delete: (matricula, callback) => {
            const query = `Delete from alumnos where matricula = ?`
            db.query(query,[matricula], callback);
      },
      
};

module.exports = Alumno;