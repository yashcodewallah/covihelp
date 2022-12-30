import './App.css';
import Navbar from './components/navbar/navbar';
import About from "./components/about";
import Contact from "./components/contact";
import Reports from './components/reports';
import Home from "./components/home/home"
import Footer from './components/footer/footer';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
