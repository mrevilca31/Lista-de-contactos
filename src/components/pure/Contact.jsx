import React from "react";
// import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const Contact = ({ contacto }) => {
  return (
    <div>
      <h1>Contacto</h1>
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Apellido: {contacto.apellido}</h2>
      <h2>Email: {contacto.email}</h2>
      <h3>
        Estado:{" "}
        {contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </h3>
    </div>
  );
};

// Contact.propTypes = {
//   contacto: PropTypes.instanceOf(Contacto),
// };

export default Contact;
