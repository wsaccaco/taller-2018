export default {
  sumar: (a, b) => {
    let name = 'waldo';
    console.log(name);
    return a + b;
  }
}

export function fetch(url, callback) {
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = () => {
    let data;
    if (request.status === 200) {
      data = JSON.parse(request.responseText)
    }
    callback({data})
  };

  request.onerror = (error) => {
    callback({error})
  };
  request.send();
}

export const sumar = 'sumar';