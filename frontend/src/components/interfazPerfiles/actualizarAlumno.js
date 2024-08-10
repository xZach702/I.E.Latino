import React, { useState } from 'react';
import axios from 'axios';

const ActualizarAlumnoForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    matricula: '',
    newMatricula: ''
  });
  formData.newMatricula = formData.matricula;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8080/api/update', formData);
      if (response.status === 201) {
            alert('Alumno actualizado correctamente');
            setFormData({
                  nombre: '',
                  apellido_paterno: '',
                  apellido_materno: '',
                  matricula: '',
                  newMatricula: ''
                });
      }
      else{
            alert('Error al actualizar el alumno.');
      }
    } catch (error) {
      alert(`Error: ${error.response.data.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Matrícula:</label>
        <input
          type="text"
          name="matricula"
          value={formData.matricula}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Apellido Paterno:</label>
        <input
          type="text"
          name="apellido_paterno"
          value={formData.apellido_paterno}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Apellido Materno:</label>
        <input
          type="text"
          name="apellido_materno"
          value={formData.apellido_materno}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Actualizar Alumno</button>
    </form>
  );
};

export default ActualizarAlumnoForm;