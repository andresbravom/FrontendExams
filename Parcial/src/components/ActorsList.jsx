import React from "react";
import "./styles.css";


const ActorsList = props => {
    const infoMovie = props;
    const onCharacter = props.onCharacter;

    return(
        <div className="Info">
            
            <div className="Film" key={infoMovie.movie.id}>
                <img src={infoMovie.movie.image} alt={infoMovie.movie.title}/>
                <div 
                    className="title"> 
                    <h1>Title: </h1>
                    {infoMovie.movie.title}
                </div>
                <div 
                    className="description"> 
                    <h1>Description: </h1>
                    {infoMovie.movie.opening_crawl}
                </div>
                <div 
                    className="director"> 
                    <h1>Director: </h1>
                    {infoMovie.movie.director}
                </div>
                <div 
                    className="producer"> 
                    <h1>Production: </h1>
                    {infoMovie.movie.producer}
                </div>
                <div 
                    className="release"> 
                    <h1>Realease date: </h1>
                    {infoMovie.movie.release_date}
                </div>
                <div className="characters" >
                    <h1>Characters: </h1>
                    {infoMovie.movie.characters.map(obj => (
                        <div className="infoCharacters" key={obj.id} onClick={() => onCharacter(obj.name)}>
                            <img classname= "image" src={obj.image} alt={obj.name}/>
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    )
}
export { ActorsList as default };