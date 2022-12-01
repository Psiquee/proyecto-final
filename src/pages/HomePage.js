import '../styles/HomePage.css'


const HomePage = (props) => {
    return (
        <body>


            <div className="container">

                <hr />
                <header className="showcase">
                    <h2>DIAMANTE DESING</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil
                        porro excepturi nemo.
                    </p>

                </header>

                <div className="title-cards">
                    <h2>NUESTRAS JOYAS</h2>
                </div>

                <div className="new-cards">
                    <div className="item">
                        <figure>
                        <img src="\img\Productos\ying-yang.jpg" alt="producto" />
                        </figure>
                        <div className="info-item">
                            <h3>Armonia</h3>
                            <a href="\Joyas" target="_parent"><button>Ver más</button></a>
                        </div>
                    </div>

                    <div className="item">
                        <figure>
                            <img src="\img\Productos\SB1.JPG" alt="producto" />
                        </figure>
                        <div className="info-item">
                            <h3>SB</h3>
                            <a href="\Joyas" target="_parent"><button>Ver más</button></a>
                        </div>
                    </div>



                    <div className="item">
                        <figure>
                            <img src="img/anillo-gotico.png" alt="producto" />
                        </figure>
                        <div className="info-item">
                            <h3>Anillo Gotico</h3>
                            <a href="\Joyas" target="_parent"><button>Ver más</button></a>
                            
                        </div>
                    </div>
                </div>
            </div>

            
        
            
        </body>

    );
}
export default HomePage;