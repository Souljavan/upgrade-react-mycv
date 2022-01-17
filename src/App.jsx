import { useState } from 'react';
import './App.scss';
import {CV} from "./CV/CV"
import  Hero  from "./components/Hero"
import Education from "./components/Education"
import Experience from './components/Experience';
import Languages from './components/Languages';
import About from './components/About'
import Skills from './components/Skills'

function App() {

  const {hero, education, experience, languages, habilities} = CV; //destructuring del Json de CV. 
  const [showEducation, setShowEducation] = useState(true);  //Use State 

  return ( 
    <div className="page-content">
    <div className="container">
      <Hero hero={hero} /> 
      <About hero={hero} />

     
     
      <div className='row shadow bg-white p-2 my-4'>
      <div className="col-12 text-center">
        <button className="btn btn-primary" onClick={()=>setShowEducation(true)}> Education </button>
        <button className="btn btn-success" onClick={()=>setShowEducation(false)}> Experience </button>
        </div>
        {showEducation? (<Education education={education} /> ):(<Experience experience={experience} />)}
      </div>
      
      <Languages languages={languages} />
      <Skills habilities={habilities} />
      </div>
    </div>
       
  );
}

export default App;
