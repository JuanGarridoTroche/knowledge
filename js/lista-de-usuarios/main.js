const contactBox = document.querySelector('#contactBox');
const loadUsersBox = document.querySelector('#loadUsersBox');
const loadUsersBtn = document.querySelector('#loadUsersBtn');

const usersNumber = document.querySelector('#usersNumber');

const userList = document.querySelector('#userList');
const cardSkeleton = document.querySelector('#cardSkeleton');

loadUsersBtn.addEventListener('click', getUsersData);

function getUsersData() {
  asyncFetching()
  .then((data) => {
    // console.log(data);    
    toggleContactBox();
    printNumberOfUsers(data);
    printSkeleton(data);
  })
  .catch((error) => {
    console.error(error);
  });
}

function printSkeleton(data) {
  data.forEach(user => {
    const skeletonContent = cardSkeleton.content.cloneNode(true);
    userList.appendChild(skeletonContent);
  });
}

//Imprime el número de usuarios
function printNumberOfUsers(data) {
  usersNumber.innerHTML = `${data.length}`;
}

function toggleContactBox() {
  contactBox.classList.toggle('hidden');
  loadUsersBox.classList.toggle('hidden');
}

//Usaremos una API-REST req-res (https://reqres.in). Podemos hacer pruebas con listas de usuarios fake que nos entrega esta API en vez de perder tiempo creándolos uno mismo.

/* Se podría realizar con fetch pero para al no controlar el tiempo de consulta de un servicio exterior como es la API, debemos utilizar una Promise con async y await:
fetch('https://reqres.in/api/users')
  .then((res) => res.json())
  .then((data) => console.log(data));
*/
//
const asyncFetching = async() => {
  const response = await fetch('https://reqres.in/api/users');
  if (response.status!==200) {
    throw new Error('Incapaz de obtener datos 😿')
  }
  const { data, ...rest } = await response.json();
  // console.log(rest);
  console.log(data);
  return data;
}

