window.addEventListener('DOMContentLoaded', () => {

  let $textspeech = document.getElementById('textspeech');
  let $speak = document.getElementById('speak');
  let syn = window.speechSynthesis;

  let value = $textspeech.value;

  let config = new window.SpeechSynthesisUtterance(value);

  config.voice = syn.getVoices()[8];

// creamos el evento click
  $speak.addEventListener('click', function() {

    Synthesis.speak(config)
  });

})