import React from "react";
import "./Languages.scss"

const Languages = ({languages})=> {

    return(
        <div className="row shadow bg-white p-2 my-4 text-center">
        <div className="col-12">
            <h2>Languages</h2>

            <div className="card cardlang" key={JSON.stringify(languages)}>
            <div className="card-body">
                <h5 className="card-title">{languages.language}</h5>
                <p className="card-text">🗣 Speaker Level:  {languages.wrlevel}</p>
                <p className="card-text">✎ Writer Level: {languages.splevel}</p>
            </div>
            </div>
        </div>
      </div>
    )
}

export default Languages;