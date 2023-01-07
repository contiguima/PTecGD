import React, { useState } from 'react';

function Respuestas(props) {
  const [formData, setFormData] = useState(props.formData);

  return (
    <div>
      <h1>Datos de la encuesta</h1>
      <p>Aca están los datos que has enviado en el formulario:</p>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Respuestas;