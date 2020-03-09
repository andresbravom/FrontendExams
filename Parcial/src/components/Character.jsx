import React from "react";
import "./styles.css";

const Character = props => {
    const characterAux= props;
    const onCharacter = props.onCharacter;

    console.log(characterAux);
    return(
        // <div className="infoCharacter">
        //     <div className="character" key={characterAux.character.id}>

        //     </div>

        // </div>
        <text>
            hola
        </text>
    )
}
export { Character as default };