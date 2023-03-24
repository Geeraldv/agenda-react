import React, { useState } from "react";
import "./index.css";

function Agregar() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = () => {
    const contacto = { nombre, apellido, telefono };
    fetch("http://www.raydelto.org/agenda.php", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify(contacto),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="navbar">
        <a href="./"> Ver contactos</a>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Agregar contacto
        </button>
      </form>
    </>
  );
}

export default Agregar;
