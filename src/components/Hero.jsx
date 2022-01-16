import React from "react";
import "./Hero.scss" //importamos los estilos. 

const Hero = ({hero}) => {   //El segun Hero es el props recibido desde APP
    return (
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
      );

}

export default Hero;