import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Episode from "./assets/data";

class App extends Component {
  state = {
    episode: [...Episode],
    mode: null,
    character: null,
  };

  actorsClickHandler = mode => {
    this.setState({mode});
  }
  showCharacterHandler = character => {
    console.log(character);
    this.setState({character});
  }
  render() {
    return (
      <div className="App">
        <Body
          onClick={{
            onActors:this.actorsClickHandler,
            onCharacter:this.showCharacterHandler
          }}
          data={this.state}
        />
        <Header
          onClick={{
            onCharacter:this.showCharacterHandler
          }}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
