import { useState, useEffect } from 'react';
import axios from 'axios';
import JoyaItem from '../components/novedades/JoyaItem';
import '../styles/JoyasPage.css';

const JoyasPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [joyas, setJoyas] = useState([]);
    
    useEffect(() => {
        const cargarJoyas = async () => {
            setLoading(true);
            const response = await axios.get ('http://localhost:3000/api/joyas');
            setJoyas(response.data);
            setLoading (false);
        };
        cargarJoyas();
    }, []);








    
    return (
        <div>
            
            <div className="container">

                <hr />

                <section className="cards-banner-two">
                    <div className="content-2">
                        <h2>JOYAS</h2>
                    </div>
                </section>
                <body className='body-joyas'>

                    <div className='box-categoria'> <h3>Categoria</h3>
                        <ul>
                        <li>
                            <a href='/joyas' id="categoyItem" category ='all'><p>Todos</p></a>
                            </li>
                            <li>
                            <a href='/joyas' id="categoyItem" category ='anillos'><p>Anillos</p></a>
                            </li>
                            <li>
                            <a href='/joyas' id="categoyItem" category ='cadenas'><p>Cadenas</p></a>
                            </li>
                            <li>
                            <a href='/joyas' id="categoyItem" category ='dijes'><p>Dijes</p></a>
                            </li>
                        </ul>
                    </div>
                    <div className="box-joyas">
                    {loading ? (<p>Cargando...</p>) 
                        : (
                            joyas.map (item => <JoyaItem key={item.id}
                                title = {item.titulo} image ={item.imagen} description = {item.descripcion}
                                price = {item.precio}/>)
                        )
                    }

                    </div>
                </body>
            </div>

            
            

        </div>
    );
}
export default JoyasPage;