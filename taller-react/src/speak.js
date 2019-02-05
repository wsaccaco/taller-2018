export default class Speak {
  constructor() {
    this.$textarea = document.querySelector('#textarea');
    this.$speak = document.querySelector('#speak');
    this.init();
  }

  init(){
    this.bindEvents();
  }



  bindEvents(){
    this.$speak.addEventListener('click', () => {
      this.speak();
    } )
  }

}