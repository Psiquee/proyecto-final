import '../styles/ContactoPage.css';
import {useState} from 'react';
import axios from 'axios';

const ContactosPage = (props) => {
    const initialForm = {
        nombre:'',
        email: '',
        telefono: '',
        mensaje: '',
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState ('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }
const handleSudmit = async e => {
    e.preventDefault();
    setMsg ('');
    setSending(true)
    const response = await axios.post ('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
        setFormData(initialForm)
    }
}





    return (
        <body>
            <div className="menu-btn">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="container">

                <hr />

                <section className="cards-banner-four">
                    <div className="content-2">
                        <h2>CONTACTOS</h2>
                    </div>
                </section>
                {/* <body> */}
                    <div className="container-contacto">
                        <div className="img-text">
                            <img src="img/FINAL.png" alt="Logo-form" className="imagen-form" />

                            <div className="text-contacto">
                                <h4>
                                    CONSULTA POST COMPRA
                                </h4>
                                <p>Para realizar una consulta sobre una compra
                                    efectuada en nuestro local, solicitamos indicar ID de venta
                                    de Galga.</p>
                            </div>



                            <div className="links">


                                <a href="https://www.facebook.com/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/">
                                <i className="fa-brands fa-instagram"></i>
                                </a>

                            </div>


                        </div>


                        <div className="formulario">
                            <form action="/contacto" method="post"  onSubmit={handleSudmit} className="formulario">
                                <p>
                                    <label htmlFor="nombre">NOMBRE <span>*</span> </label>
                                    <input type="text" name="nombre" value ={formData.nombre} className="form-control" onChange={handleChange} />
                                </p>
                                <p>
                                    <label htmlFor="apellido">APELLIDO <span>*</span></label>
                                    <input type="text" name="apellido" value ={formData.apellido} className="form-control" onChange={handleChange} />
                                </p>
                                <p>
                                    <label htmlFor="email">EMAIL <span>*</span></label>
                                    <input type="email" name="email" value ={formData.email} className="form-control" onChange={handleChange} />
                                </p>
                                <p>
                                    <label htmlFor="mensaje">CONSULTA <span>*</span></label>
                                    <textarea name="mensaje" value ={formData.mensaje} className="form-control" onChange={handleChange}></textarea>
                                </p>
                                <button id="botonEnviar" type="submit" className="btn essence-btn form-boton" value="Enviar">Enviar</button>
                                {sending ? <p>Enviando...</p> : null}
                                {msg ? <p>{msg}</p> : null}
                            </form>

                        
                        </div>
                    </div>
                {/* </body> */}
            </div>
            
            

        </body>
    );
}
export default ContactosPage;