export function sumar(a , c){
  return a+c;
}

export function fetchOld(url, callback = () => {}){
  let request = new XMLHttpRequest();

  request.open('GET', url);

  request.onload = () => {
    if (request.status === 200) {
      callback(JSON.parse(request.responseText));
    }
  };

  request.onerror = (error) => {
    callback({error})
  }

  request.send();

}