import React from "react";
import "./Experience.scss"

const Experience = ({experience})=> {

    return(
      <div className="col-12">
      <h2 className="h2 fw-light my-4 text-center">Experience</h2>

          <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div id="content">
                        <ul class="timeline">
                        {experience.map((item) => {
                            return (
                              <li class="event" data-date={item.date}>
                                <h3>{item.name}</h3>
                                <h2>{item.where}</h2>
                                <p>{item.description}</p>
                              </li>
                            
                            );
                          })}
                  
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Experience;