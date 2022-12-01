
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import GalgaPage from './pages/GalgaPage';
import JoyasPage from './pages/JoyasPage';
import ProyectosPage from './pages/ProyectosPage';
import ContactosPage from './pages/ContactoPage';

function App() {
  return (
    <main className="App">
      
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="galga" element= {<GalgaPage/>}/>
        <Route path="joyas" element= {<JoyasPage/>}/>
        <Route path="proyectos" element= {<ProyectosPage/>}/>
        <Route path="contacto" element= {<ContactosPage/>}/>
      </Routes>
      
      
      </BrowserRouter>
      
      <Footer/>
    </main>
  );
}

export default App;
