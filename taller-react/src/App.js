import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    //this.speak = this.speak.bind(this);
    this.$textarea = React.createRef();
  }

  speak = () => {
    let synthesis = window.speechSynthesis;
    let Utterance = new window.SpeechSynthesisUtterance(this.$textarea.current.value);
    Utterance.voice = synthesis.getVoices()[8];
    synthesis.speak(Utterance);
  };

  Salud = (props) => {
    return (<div>Hola soy {props.name}</div>)
  };

  render() {

    let Salud = this.Salud;

    return (
      <div className="App">
          <textarea ref={this.$textarea} id="textspeech" cols="30" rows="10" />
          <input type="button" value="speak" id="speak" onClick={this.speak} />
          <Salud name='waldo'/>
          <Salud name='Juan'/>
      </div>
    );
  }
}

export default App;
