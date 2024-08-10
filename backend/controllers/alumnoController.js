const Alumno = require('../models/alumnoModel');

const getAllAlumnos = (request, response) => {
      Alumno.getAll((err, results) => {
            if (err) {
                  response.status(500).json({ error: err.message });
                  return;
            }
            response.json(results);
      });
};

const addAlumno = (request, response) => {
      const nuevoAlumno = request.body;
      Alumno.add(nuevoAlumno, (err, results) => {
            if (err) {
                  response.status(500).json({ error: err.message });
                  return;
            }
            response.status(201).json({ message: 'Alumno agregado correctamente', id: results.insertId });
      });
};

const updateAlumno = (request, response) => {
      const alumno = request.body;
      Alumno.update(alumno, (err, results) => {
            if (err) {
                  response.status(500).json({ error: err.message });
                  return;
            }
            if (results.affectedRows === 0){
                  response.status(404).json({message:'El alumno ingresado no existe.'});
                  return;
            }
            response.status(201).json({ message: 'Alumno actualizado correctamente'});
      });
};

const deleteAlumno = (request, response) => {
      const {matricula} = request.params;
      Alumno.delete(matricula, (err, results) => {
            if (err) {
                  response.status(500).json({ error: err.message });
                  return;
            }
            if (results.affectedRows === 0){
                  response.status(404).json({message:'Alumno no encontrado'});
                  return;
            }
            response.status(201).json({ message: 'Alumno eliminado correctamente'});
      });
};


module.exports = {getAllAlumnos, addAlumno, updateAlumno, deleteAlumno};
