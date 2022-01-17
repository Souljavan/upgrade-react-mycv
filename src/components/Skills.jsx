import React from 'react'

const Skills = ({habilities}) => {
    return (
        <div className="row shadow bg-white p-2 my-4 text-center">
        <div className="col-12">
            <h2>Skills</h2>
            <ul className="list-group">
            {habilities.map((item) => {
                            return (
                              <li className="list-group-item">{item}
                              </li>
                            
                            );
                          })}
            </ul>
        </div>
        </div>
    )
}

export default Skills
