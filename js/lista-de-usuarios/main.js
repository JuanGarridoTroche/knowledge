const contactBox = document.querySelector("#contactBox");
const loadUsersBox = document.querySelector("#loadUsersBox");
const loadUsersBtn = document.querySelector("#loadUsersBtn");

const usersNumber = document.querySelector("#usersNumber");

const userList = document.querySelector("#userList");
const cardSkeleton = document.querySelector("#cardSkeleton");

const cardTemplate = document.querySelector("#cardTemplate");

loadUsersBtn.addEventListener("click", getUsersData);
userList.addEventListener("click", filterEventByButtonClicked);

function filterEventByButtonClicked(e) {
  if (e.target.className.includes("cardBtn")) {
    // console.log(e.target);
    const parentNode = e.target.parentNode;
    const user = JSON.parse(parentNode.getAttribute("data-user"));
    // console.log({ user });
    showModalWithUserData(user);
  }
};


//Creamos un modal para mostrar el email del usuario
function showModalWithUserData(user) {
  const { id, avatar, email, first_name, last_name } = user;
  Swal.fire({
    titleText: `#${id} - ${first_name} ${last_name}}`,
    text: `${email}`,
    imageUrl: `${avatar}`,
    imageWidth: 200,
    imageHeigth: 200,
    imageAlt: `Avatar de: ${first_name}`,
    confirmButtonColor: '#9EDEFD',    
  });
}

function getUsersData() {
  toggleContactBox();
  printSkeleton(6);
  asyncFetching()
    .then((data) => {
      // console.log(data);
      printNumberOfUsers(data);
      userList.innerHTML = "";
      printUserData(data);
    })
    .catch((error) => {
      console.error(error);
      showToastWithError(error);
    });
};

function showToastWithError(error)
 {
  const toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });
  toast.fire({
    icon: 'error',
    title: `${error}`,
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
  data.forEach((user) => {
    const { avatar, email, first_name, last_name } = user;
    // console.log(user.email);
    const cardContent = cardTemplate.content.cloneNode(true);

    cardContent
      .querySelector("div")
      .setAttribute("data-user", JSON.stringify(user));
    const avatarImg = cardContent.querySelector("#avatarImg");
    avatarImg.src = avatar;

    const firstName = cardContent.querySelector("#firstName");
    firstName.textContent = first_name;
    const lastName = cardContent.querySelector("#lastName");
    lastName.textContent = last_name;

    userList.appendChild(cardContent);
  });
}

function printSkeleton(numberOfSkeleton) {
  const skeletonArray = [...Array(numberOfSkeleton).keys()];
  skeletonArray.forEach((user) => {
    const skeletonContent = cardSkeleton.content.cloneNode(true);
    userList.appendChild(skeletonContent);
  });
}

//Imprime el número de usuarios
function printNumberOfUsers(data) {
  usersNumber.innerHTML = `${data.length}`;
}

function toggleContactBox() {
  contactBox.classList.toggle("hidden");
  loadUsersBox.classList.toggle("hidden");
}

//Usaremos una API-REST req-res (https://reqres.in). Podemos hacer pruebas con listas de usuarios fake que nos entrega esta API en vez de perder tiempo creándolos uno mismo.

/* Se podría realizar con fetch pero para al no controlar el tiempo de consulta de un servicio exterior como es la API, debemos utilizar una Promise con async y await:
fetch('https://reqres.in/api/users')
  .then((res) => res.json())
  .then((data) => console.log(data));
*/
//
const asyncFetching = async () => {
  //En la URL le añadimos un delay de 2s para que le de tiempo a comprobar si tiene que cargar el skeleton (0 usuarios) o los usuarios. Si no lo queremos añadir solo tenemos que eliminar de la URL "?delay=2"
  const response = await fetch("https://reqres.in/api/users?delay=2");
  if (response.status !== 200) {
    throw new Error("Incapaz de obtener datos 😿");
  }
  const { data, ...rest } = await response.json();
  // console.log(rest);
  console.log(data);
  return data;
};
