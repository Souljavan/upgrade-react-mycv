import React from "react";
import "./Hero.scss" //importamos los estilos. 
import Container from 'react-bootstrap/Container';
import { BsFillCalendarDayFill,BsMailbox2 } from "react-icons/bs";
import { AiFillMobile,AiFillGithub } from "react-icons/ai";

const Hero = ({hero}) => {   //El segun Hero es el props recibido desde APP
    return (
      
        <div className="row text-center background">
          <div className="col-12">

          <div className="card cardhero ">
  <img src={hero.image} className="card-img-top" alt="Javi" />
  <div className="card-body">
    <h6 className="card-title">{hero.name} {hero.Surname}</h6>
    <p className="card-text">
    <p ><BsFillCalendarDayFill /> {hero.birthDate}</p>
    <p ><BsMailbox2 /><a href={"mailto:" + hero.email}> {hero.email}</a></p>
    <p><AiFillMobile /> {hero.phone}</p>
    <p><AiFillGithub /><a href={hero.gitHub}>Github</a></p>
    </p>
  </div>
        </div>
          </div>
        </div>
            
    
     );

}


/*
 <>
      <div className="HeroGroup">
      <div className="herocentral">asdas</div>
      </div>

        <div className="hero">
          <img src={hero.image} alt="" />
          <div className="card">
          <h2>
            {hero.name} {hero.Surname}
          </h2>
            <p>🗺️ {hero.city} </p>
            <p>🗓️ {hero.birthDate}</p>
            <p>📧  <a href={"mailto:" + hero.email}> {hero.email}</a>
            </p>
            <p>📱 {hero.phone}</p>
            <p>💾 <a href={hero.gitHub}>
               My GitHub
              </a></p>
          </div>
        </div>
        </>
*/

export default Hero;