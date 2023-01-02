import './App.css';
import Navbar from './components/navbar/navbar';
import About from "./components/about";
import Contact from "./components/contact";
import Reports from './components/reports';
import Home from "./components/home/home"
import Footer from './components/footer/footer';
import axios from 'axios';
import {BrowserRouter,Route,Routes,} from 'react-router-dom';
import { useState,useEffect } from 'react';

 
function App() {
  const [active, setActive] = useState("loading");
  const [death,setDeath]= useState("loading");
  const [recovered,setRecovered]= useState("loading");
 
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/India/ind',
      headers: {
        'X-RapidAPI-Key': '1d66893269mshea92921aa55aa31p1b73b8jsn831c5a571d80',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      const data=response.data;
      setActive(data[0].ActiveCases)
      setRecovered(data[0].TotalRecovered)
      setDeath(data[0].TotalDeaths)
    }).catch(function (error) {
      console.error(error);
    });
  },[])
  

  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className='container'>
          <Routes>
            <Route path="/" element={<Home active={active} death={death} recovered={recovered} />} />
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
