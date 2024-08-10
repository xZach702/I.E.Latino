import React, { useState } from 'react';
import axios from 'axios';

const AgregarAlumnoForm = () => {
      const [formData, setFormData] = useState({
            nombre: '',
            apellido_paterno: '',
            apellido_materno: '',
            matricula: ''
          });

      const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
            ...prevData,
            [name]: value,
      }));
      };

      const handleSubmit = async (e) => {
      e.preventDefault();
      try {
            const response = await axios.post('http://localhost:8080/api/add', formData);
            if (response.status === 201) {
                  alert('Alumno registrado correctamente');
                  setFormData({
                        nombre: '',
                        apellido_paterno: '',
                        apellido_materno: '',
                        matricula: '',
                        newMatricula: ''
                  });
            }
            else{
                  alert('Error al registrar alumno.');
            }
      } catch (error) {
            alert(`Error: ${error.response.data.error}`);
      }
      };

      return (
      <form onSubmit={handleSubmit}>
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
            <button type="submit">Agregar Alumno</button>
      </form>
      );
};

export default AgregarAlumnoForm;