import formData from "../db.json";
import { useState } from "react";
import * as firebase from "../firebase"
import "../stylesheets/formulario.css"

function Formulario() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    firebase
      .database()
      .ref("encuestas")
      .push(data)
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }

  function renderItem(item) {
    switch (item.type) {
      case "text":
        return (
          <div>
            <label htmlFor={item.name}>{item.label}</label>
            <input type="text" name={item.name} required={item.required} />
          </div>
        );
      case "email":
        return (
          <div>
            <label htmlFor={item.name}>{item.label}</label>
            <input type="email" name={item.name} required={item.required} />
          </div>
        );
      case "date":
        return (
          <div>
            <label htmlFor={item.name}>{item.label}</label>
            <input type="date" name={item.name} required={item.required} />
          </div>
        );
      case "select":
        return (
          <div>
            <label htmlFor={item.name}>{item.label}</label>
            <select name={item.name} required={item.required}>
              {item.options.map(option => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        );
      case "checkbox":
        return (
          <div>
            <label htmlFor={item.name}>{item.label}</label>
            <input type="checkbox" name={item.name} required={item.required} />
          </div>
        );
      case "submit":
        return <button type="submit">{item.label}</button>;
      default:
        return null;
    }
  }

  if (success) {
    return <p>Encuesta enviada con éxito</p>;
  }

  if (error) {
    return <p>Error al enviar la encuesta: {error.message}</p>;
  }

  return <>
    
    <form onSubmit={handleSubmit} className="formStyle">
    <h1> Challenge GreyDive </h1>
    <p>Por favor, complete los siguientes datos</p>
      {formData.items.map(item => renderItem(item))}
    </form>
    
    </>
}

export default Formulario;