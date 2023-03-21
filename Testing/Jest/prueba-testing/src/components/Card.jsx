export function titleCase(text) {
  if(!text) {return ""}
  // const palabras = text.split(" ");
  // const result = [];
  // for (let palabra of palabras) {
  //   result.push(
  //     palabra.at(0).toUpperCase() + palabra.substring(1).toLowerCase()
  //   );
  // }

  // return result.join(' ');
  // Alternativa en una sola línea
  return text.split(' ').map(palabra => palabra.at(0).toUpperCase() + palabra.substring(1).toLowerCase()).join(' ');
}

const Card = ({ name, surname, age, description }) => {
  return (
    <h2>
      Hola {name}, {surname}
    </h2>
  );
};

export default Card;
