import style from './body.css'
import {fetch, sumar} from './math'
import Speak from './speak'

console.log(sumar);

new Speak();
// window.addEventListener('DOMContentLoaded', () => {
//   new Speak();
// });

function connecToServer(callback){
  fetch('https://api.github.com/users/wsaccaco', (obj) => {
    callback(obj)
  });
}

function main() {
  connecToServer((data) => {

  })
}

main();



