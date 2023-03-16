import useForm from "../../hooks/useForm";
import './contacto.scss'
import imagen4 from '../../assets/images/4.jpg'

const Contacto = () => {

    const initialData = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const onValidate = (form) => {
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
        let regexMessage = /^.{1,255}$/;

        if (!form.name.trim()) { // trim() elimina espacios vacios
            errors.name = 'El campo "Nombre" no debe estar vacío.'
        } else if (!regexName.test(form.name)) {
            errors.name = 'El campo "Nombre" solo acepta letras y espacios.'
        }

        if (!form.email.trim()) {
            errors.email = 'El campo "Email" no debe estar vacío.'
        } else if (!regexEmail.test(form.email)) {
            errors.email = 'El campo "Email" contiene un formato no valido.'
        }

        if (!form.phone.trim()) {
            errors.phone = 'El campo "Teléfono" no debe estar vacío.'
        } else if (!regexPhone.test(form.phone)) {
            errors.phone = 'El "Teléfono" ingresado debe tener 10 digitos y pertenecer a Argentina.'
        }

        if (!form.message.trim()) {
            errors.mesagge = 'El campo "Mensaje" no debe estar vacío.'
        } else if (!regexMessage.test(form.messages)) {
            errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.'
        }

        return errors
    }

    const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate)



    return (
        <div className='contacto-content' id='contacto'>
            <div className="titulos">
                <h1 className="titulo-arriba-dos">Get in touch</h1>
                <h2 className="titulo-abajo-dos">We are hiring!</h2>
            </div>
            <img src={imagen4} className='foto-form' alt="img4" />
            <form onSubmit={handleSubmit} className='formulario'>
                <div className="campos-form">
                    <label className='form-label'>Nombre</label>
                    <input
                        type="text"
                        className='form-control'
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="alert alert-danger p-1">{errors.name}</div>}
                </div>
                <div className="campos-form">
                    <label className='form-label'>Email</label>
                    <input
                        type="email"
                        className='form-control'
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="alert alert-danger p-1">{errors.email}</div>}
                </div>
                <div className="campos-form">
                    <label className='form-label'>Teléfono</label>
                    <input
                        type="number"
                        className='form-control'
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="alert alert-danger p-1">{errors.phone}</div>}
                </div>
                <div className="campos-form">
                    <label className='form-label'>Mensaje</label>
                    <textarea
                        type="text"
                        className='form-control'
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>
                {errors.message && <div className="alert alert-danger p-1">{errors.message}</div>}

                <button className='boton' id="boton-enviar" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
            </form>
        </div>
    )
}


export default Contacto























// import React, { Component } from 'react';

// class ContactoDos extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: '', email: '', phone: '', message: '' };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             name: event.target.value.name,
//             email: event.target.value.email,
//             phone: event.target.value.phone,
//             message: event.target.value.message
//         });
//     }

//     handleSubmit(event) {
//         alert('A data was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className='formulario'>
//                 <div className="campos-form">
//                     <label className='label'>Name:</label>
//                     <input
//                         type="text"
//                         name='name'
//                         id='name'
//                         className='datos-form'
//                         placeholder='ej: Juan Pérez'
//                         value={this.state.value.name}
//                         onChange={this.handleChange}
//                     />
//                     <label className='label'>Email:</label>
//                     <input
//                         type="email"
//                         name='email'
//                         id='email'
//                         className='datos-form'
//                         placeholder='ej: persona@ejemplo.com'
//                         value={this.state.value.email}
//                         onChange={this.handleChange}
//                     />
//                     <input
//                         type="number"
//                         name='phone'
//                         id='phone'
//                         className='datos-form'
//                         placeholder='sin el 0 ni el prefijo 15'
//                         value={this.state.value.phone}
//                         onChange={this.handleChange}
//                     />
//                     <input
//                         type="text"
//                         name='message'
//                         id='message'
//                         className='datos-form'
//                         placeholder='Escriba aqui su texto...'
//                         value={this.state.value.message}
//                         onChange={this.handleChange}
//                     />
//                     <input type="submit" value="Enviar" id='boton-enviar' />
//                 </div>
//             </form>
//         );
//     }
// }

// export default ContactoDos