import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Tab, Tabs} from 'react-bootstrap';
import AgregarAlumnoForm from './agregarAlumno';
import ActualizarAlumnoForm from './actualizarAlumno';
import EliminarAlumnoForm from './eliminarAlumno';

const Profesor = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Hacer una solicitud GET al servidor backend para obtener los alumnos
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(entity => {
    return search === ''
      ? true
      : entity.nombre.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Interfaz Profesor</h1>
      <Tabs defaultActiveKey="agregar" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="agregar" title = "Agregar Alumno"><AgregarAlumnoForm /></Tab>
            <Tab eventKey="actualizar" title = "Actualizar datos de Alumnos"><ActualizarAlumnoForm /></Tab>
            <Tab eventKey="eliminar" title = "Eliminar Alumno"><EliminarAlumnoForm /></Tab>
      </Tabs>

      <h3>Alumnos Registrados:</h3>
      <input
        className="form-control"
        type="text"
        onChange={e => setSearch(e.target.value)}
        placeholder="Buscar..."
      />
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>Apellido Paterno</td>
            <td>Apellido Materno</td>
            <td>Matrícula</td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(entity => (
            <tr key={entity.id}>
              <td>{entity.id}</td>
              <td>{entity.nombre}</td>
              <td>{entity.apellido_paterno}</td>
              <td>{entity.apellido_materno}</td>
              <td>{entity.matricula}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Profesor;