import React from "react";
import "./Languages.scss"

const Languages = ({languages})=> {

    return(
        <div>
        <div className="experience card">

            <div key={JSON.stringify(languages)}>
            <p>📕 {languages.language}</p>
            <p>{languages.wrlevel}</p>
            <p>{languages.splevel}</p>
            </div>

        </div>
      </div>
    )
}

export default Languages;