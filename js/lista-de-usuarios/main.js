const contactBox = document.querySelector('#contactBox');
const loadUsersBox = document.querySelector('#loadUsersBox');
const loadUsersBtn = document.querySelector('#loadUsersBtn');

const usersNumber = document.querySelector('#usersNumber');

const userList = document.querySelector('#userList');
const cardSkeleton = document.querySelector('#cardSkeleton');

const cardTemplate = document.querySelector('#cardTemplate');

loadUsersBtn.addEventListener('click', getUsersData);

function getUsersData() {
  asyncFetching()
  .then((data) => {
    // console.log(data);    
    toggleContactBox();
    printNumberOfUsers(data);
    printSkeleton(data);
    userList.innerHTML = '';
    printUserData(data);
  })
  .catch((error) => {
    console.error(error);
  });
};

function printUserData(data) {
  /* Sacamos un user del console log y lo copiamos para poder realizar un destructuring correcto
  const user = {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "George",
    id: 1,
    last_name: "Bluth"
  } 
  */
  data.forEach(user => {
    const {avatar, email, first_name, id, last_name} = user;
    // console.log(user.email);
    const cardContent = cardTemplate.content.cloneNode(true);
    const avatarImg = cardContent.querySelector('#avatarImg');
    avatarImg.src = avatar;

    const firstName = cardContent.querySelector('#firstName');
    firstName.textContent = first_name;
    const lastName = cardContent.querySelector('#lastName');
    lastName.textContent = last_name;

    userList.appendChild(cardContent);
  })
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
  //En la URL le añadimos un delay de 2s para que le de tiempo a comprobar si tiene que cargar el skeleton (0 usuarios) o los usuarios. Si no lo queremos añadir solo tenemos que eliminar de la URL "?delay=2"
  const response = await fetch('https://reqres.in/api/users?delay=2');
  if (response.status!==200) {
    throw new Error('Incapaz de obtener datos 😿')
  }
  const { data, ...rest } = await response.json();
  // console.log(rest);
  console.log(data);
  return data;
}

