import React from 'react';
import "./About.scss"
import { BsFillCalendarDayFill,BsMailbox2 } from "react-icons/bs";
import { AiFillMobile,AiFillGithub } from "react-icons/ai";

const About = ({hero}) => {
    return (
        <div className='row shadow bg-white p-2 my-4 text-center'>
        <div className='col-sm-6'>
        <h2 className="h2 fw-light my-4 text-center">About Me</h2>
        {hero.aboutMe.map((item) => {
              return (
                <div  key={JSON.stringify(item)}>
                  <p className="px-4"> {item.info}</p>
                </div>
              );
            })}
            </div>

         <div className='col-sm-6'>
         <h2 className="h2 fw-light my-4 text-center">Bio</h2>
<ul>
<li><BsMailbox2 data-toggle="tooltip" data-placement="top" title="Email Address" /><a href={"mailto:" + hero.email} className="linkaboutemail"> {hero.email}</a></li>
<li><AiFillMobile data-toggle="tooltip" data-placement="top" title="Phone Number"/> {hero.phone}</li>
    <li><BsFillCalendarDayFill data-toggle="tooltip" data-placement="top" title="Birth Date" /> {hero.birthDate}</li>
    <li><AiFillGithub data-toggle="tooltip" data-placement="top" title="GitHub" /> <a href={hero.gitHub} className="linkabout">Github</a></li>
</ul>
</div>
        </div>
    )
}

export default About
