import React from "react";
import { Contacto } from "../../models/contacto.class";
import Contact from "../pure/Contact";

const Contact_List = () => {
  const defaultContact = new Contacto(
    "Misael",
    "Vilca",
    "default@gmail.com",
    true
  );

  return (
    <div>
      <h1>Lista de Contactos</h1>
      <Contact contacto={defaultContact} />
    </div>
  );
};

export default Contact_List;
