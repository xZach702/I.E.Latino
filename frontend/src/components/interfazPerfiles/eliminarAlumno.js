import React, { useState } from 'react';
import axios from 'axios';

const EliminarAlumnoForm = () => {
      const [matricula, setMatricula] = useState('');

      const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8080/api/delete/${matricula}`);
      if (response.status === 201) {
            alert('Alumno eliminado correctamente');
            setMatricula('');
          } else {
            alert('Error al eliminar el alumno.');
          }
        } catch (error) {
          alert(`Error: ${error.response.data.message}`);
        }
      };

      return (
            <form onSubmit={handleDelete}>
              <div>
                <label>Ingrese la Matrícula:</label>
                <input 
                  type="text" 
                  value={matricula} 
                  onChange={(e) => setMatricula(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit">Eliminar Alumno</button>
            </form>
          );
};

export default EliminarAlumnoForm;