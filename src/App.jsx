import { useState } from 'react';
import './App.scss';
import {CV} from "./CV/CV"
import  Hero  from "./components/Hero"
import Education from "./components/Education"
import Experience from './components/Experience';
import Languages from './components/Languages';

function App() {

  const {hero, education, experience, languages, habilities, volunteer} = CV; //destructuring del Json de CV. 
  const [showEducation, setShowEducation] = useState(true);  //Use State 

  return ( 
    <div class="page-content">
    <div className="container">
      <Hero hero={hero} /> 
      <div className="row text-center mt-4 mb-2">
      <div className="col-12">
        <button className="btn btn-primary" onClick={()=>setShowEducation(true)}> Education </button>
        <button className="btn btn-success" onClick={()=>setShowEducation(false)}> Experience </button>
        </div>
      </div>
     
     
      <div className='shadow bg-white p-2'>
        {showEducation? (<Education education={education} /> ):(<Experience experience={experience} />)}
      </div>
      
      <Languages languages={languages} />
      </div>
    </div>
       
  );
}

export default App;
