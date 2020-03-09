
import React from "react";
import "./styles.css";
import Character from "./Character";

const Header = props => {
  const data = props;
  const onCharacter= props.onClick.onCharacter;

  let characterAux;
  console.log(data.data.episode);

  if(data.data.character != null){
    characterAux = data.data.episode.find(obj => obj.name === data.data.character);
  }
 


  return (
    <div className="Header">
      {data.data.character === null ? (
        data.data.episode.map(obj =>(
          <div className="Film" key={obj.id} onclick={() => onCharacter(obj.name)}>

          </div>
        ) )
      ) :(
        <Character
        characterAux={characterAux}
        onCharacter={onCharacter}
    />
      )

      }
      

    </div>
    
  );
};

export { Header as default };