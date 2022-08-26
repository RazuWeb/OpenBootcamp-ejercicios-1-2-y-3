import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'

const ContactoComponent = ({contacto, onclick}) => {
  return (
        <div>
            <h2>Nombre : {contacto.nombre}</h2>
            <h3>Apellido : {contacto.apellido}</h3>
            <h4>Email : {contacto.email}</h4>
            <h4 onClick={onclick}>Contacto:{contacto.conectado?'En linea':'No dispoible'}</h4>
        </div>
  )
}

ContactoComponent.propType = {
    contacto: PropTypes.instanceOf(Contacto)
}


export default ContactoComponent