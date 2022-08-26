import React, { useState } from 'react'
import { Contacto } from '../models/contacto.class'
import ContactoComponent from './contacto'


const ContactosList = () => {


    
    const defaultContacto = new Contacto('Samuel', 'Zarrabal', 'sp@gmail.com', false);
    
    const [contactoU,setContacto] = useState(defaultContacto)

    
    
    const online = ()=>{
        setContacto({...contactoU,conectado:contactoU.conectado?false:true})

    }


  return (
    <div>
        <ContactoComponent contacto={contactoU} onclick={online}/>
    </div>
  )
}

export default ContactosList