import React from "react";
import "./Education.scss"

const Education = ({education})=> { // Proop education
    return (

          <div className="row education">
          <div className="col-12">
          <h2 className="h2 fw-light my-4 text-center">Education</h2>
            {education.map((item) => {
              return (
                <div key={JSON.stringify(item)}>
                  <p className="name">📕 {item.name}</p>
                  <p>{item.where}</p>
                  <p>{item.date}</p>
                </div>
              );
            })}
            </div>
          </div>
      );

}

export default Education;