import React from "react";
import "./styles.css";
import ActorsList from "./ActorsList";
import Character from "./Character";

const Body = props => {
  const episode = props;
  const onActors = props.onClick.onActors;
  // const data = props.data;
  const onCharacter= props.onClick.onCharacter;
  let movie;
 

  if(episode.data.mode != null){
    movie = episode.data.episode.find(obj => obj.title === episode.data.mode);
    
  }

  return (
    <div className="Body">
      {episode.data.mode === null ? (
        episode.data.episode.map(obj => (
          <div className="Film" key={obj.id} onClick={() => onActors(obj.title)}>
            <img src={obj.image} alt={obj.title}/>
          </div>
        ))
        
      ):(
        <div>
          <ActorsList
            movie={movie}
            onCharacter={onCharacter} 
          />
          <Character
            movie={movie}
            onCharacter={onCharacter}
         /> 
        </div>
        
      )}
      
    </div>
  );
};

export { Body as default };
