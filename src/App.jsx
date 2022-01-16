import { useState } from 'react';
import './App.scss';
import {CV} from "./CV/CV"
import  Hero  from "./components/Hero"
import Education from "./components/Education"
import Experience from './components/Experience';

function App() {

  const {hero, education, experience, languages, habilities, volunteer} = CV; //destructuring del Json de CV. 
  const [showEducation, setShowEducation] = useState(true);  //Use State 

  return ( 
   

    <div className="App">
     <Hero hero={hero} /> 
     <div>
     <button className="custom-btn btn-4" onClick={()=>setShowEducation(true)}> Education </button>
     <button className="custom-btn btn-4" onClick={()=>setShowEducation(false)}> Experience </button>
     </div>
     <div>
     {showEducation? (<Education education={education} /> ):(<Experience experience={experience} />)}
      
     
     </div>
    </div>
  );
}

export default App;
