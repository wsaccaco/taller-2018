export default class Speak {
  constructor() {
    this.$textarea = document.querySelector('#textarea');
    this.$speak = document.querySelector('#speak');
    this.init();

    let name = 'waldo';
    let lastname = 'saccaco';

    let person = {
      name,
      lastname,
      direction : {
        street1: 'Av. Los Nogales',
        street2 : 'av. Los Robles'
      },
      country: 'Peru'
    };
    console.log(this.concatenar(person));
  }

  concatenar({name, lastname = 'Rodriguez', age = 0, ...props}) {



    let numeros = [1,2,3];
    let [uno, dos, tres] = numeros;


    return (
      `<div>
        <div>${name}</div>
        <div>${lastname}</div>
        <div>${age}</div>
      </div>`
    );
  }

  init() {
    console.log(name);
    this.bindEvents();
  }

  speak() {
    let synthesis = window.speechSynthesis;

    let Utterance = new window.SpeechSynthesisUtterance(this.$textarea.value);
    Utterance.voice = synthesis.getVoices()[8];
    synthesis.speak(Utterance);
  }

  bindEvents() {
    console.log(this);
    this.$speak.addEventListener('click', () => {
      console.log();
    });
  }

}