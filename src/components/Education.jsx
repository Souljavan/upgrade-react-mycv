import React from "react";
import "./Education.scss"

const Education = ({education})=> { // Proop education
    return (


          <div className="col-12">
          <h2 className="h2 fw-light my-4 text-center">Education</h2>
    

            <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div id="content">
                        <ul class="timeline">
                        {education.map((item) => {
                            return (
                              <li class="event" data-date={item.date}>
                                <h3>{item.name}</h3>
                                <p>{item.where}</p>
                              </li>
                            
                            );
                          })}
                  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            </div>
      );

}

export default Education;


