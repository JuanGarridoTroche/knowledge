 // npm install react-hook-form  para poder usar useForm
 

// Componente de registro que cuando se envíe, ejecute una función definida en su componente contenedor


// <Formulario nuevoContacto={onNuevoContacto}/>


// Dentro del formulario insertamos nombre, apellidos y dirección

const Formulario = () => {
  const{register, handleSubmit} = useForm();
}


export default Formulario;