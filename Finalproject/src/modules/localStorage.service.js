function getUsers() {

  fetch('https://my-json-server.typicode.com/BratskovAlexander/JSON/users').then(response => response.json()).then(json => console.log(json))

};


export { getUsers };