import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    fetch("http://www.raydelto.org/agenda.php")
      .then((response) => response.json())
      .then((data) => setContactos(data))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <div className="navbar">
        <a href="./Agregar">Agregar</a>
      </div>
      <div className="container">
        {contactos.map((contacto, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <img
                src={`https://robohash.org/user${index}`}
                alt={contacto.nombre}
              />
              <h1 className="card-title">
                {contacto.nombre} {contacto.apellido}
              </h1>
              <p className="card-text">{contacto.telefono}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
