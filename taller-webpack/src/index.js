import {sumar, fetchOld} from './math'

document.getElementById('root').innerHTML = sumar(5, 2);


// fetchOld('https://api.github.com/users/wsaccaco', function(data){
//   console.log(data);
// });

let a = fetch('https://api.github.com/users/wsaccaco').
  then(response => response.json())
  .then(json => {
    return 'waldo'
  })
  .then(data => {
    let name = `${data} Saccaco`;
    return name;
});


function sumar2(a,b){
  return () => {
    console.log(a+b);
    return a + b;
  }
}

let sumar3 = sumar2(1, 2);

setTimeout(sumar3, 2000);


let p = new Promise( (resolve, reject) => {
    setTimeout(() => {
      let send = {
        data1: 'waldo',
        data2 : 'Roberth'
      };
      resolve(send)
    }, 2000);
} )
  .catch((e) =>{
    console.warn(e)
}).finally(f => {
  console.log(f)
});

Promise.all([a, p])
  .then(data => {
    console.log(data)
});
