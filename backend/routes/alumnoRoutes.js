const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.get('/data', alumnoController.getAllAlumnos);
router.post('/add', alumnoController.addAlumno);
router.put('/update', alumnoController.updateAlumno);
router.delete('/delete/:matricula', alumnoController.deleteAlumno);

module.exports = router;