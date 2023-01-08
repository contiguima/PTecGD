import formData from "../db.json";
import { useState } from "react";
import {app} from "../firebase";
import "../stylesheets/formulario.css"
import Respuestas from './Respuestas';
import { getFirestore, collection, addDoc, getDocs , doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);
function Formulario() {
    const [success, setSuccess] = useState(false);


  const handleSubmit = async(event) =>  {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      await addDoc(collection(db,"datosEncuesta"), { 
        ...data
        
      });
      // Problema: VER por qué no cambia la variable pero si la lee
      console.log(success);
      setSuccess(true);
      console.log("Después: ", success);
      event.target.reset();       
    } catch (error) {
      console.log(error);
    }

    
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
            <input type="date" name={item.name} required={item.required}  />
          </div>
        );
      case "select":
        return (
          <div>
            <label htmlFor={item.name}>{item.label}</label>
            <select name={item.name} required={item.required} >
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

  return <>
    
    <form onSubmit={handleSubmit} className="formStyle">
    <h1> Challenge GreyDive </h1>
    <p>Por favor, complete los siguientes datos</p>
      {formData.items.map(item => renderItem(item))}
    </form>
    
    </>
}

export default Formulario;