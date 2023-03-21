import { render, screen, userEvent } from "@testing-library/react"
import Formulario from "../components/Formulario";

const mockFn = jest.fn();

const setup = ()=> {
  render(<Formulario nuevoContacto={mockFn}/>);
}

describe('Formulario de registro', ()=> {
  // Comprobar que el formulario se envía con los datos correctos
  test('Comprobación de formulario con los datos correctos', ()=> {
    setup();
    // Recuperación de datos
    const inputNombre = screen.getByLabelText('Nombre');
    const inputApellidos = screen.getByLabelText('Apellidos');
    const inputDireccion = screen.getByLabelText('Dirección');
    //Busca el nombre crea contacto y la i: no distingue entre may y minúsculas
    const button = screen.getByRole('button', {
      name: /crea contacto/i
    });

    //Rellenar y enviar el formulario
    userEvent.clear(inputNombre);
    userEvent.type(inputNombre, contacto.nombre)
    userEvent.clear(inputApellidos);
    userEvent.type(inputApellidos, contacto.apellidos);
    userEvent.clear(inputDireccion);
    userEvent.type(inputDireccion, contacto.direccion)
    userEvent.click(button);
    console.log(mockFn.);

   
    //Pulsamos el botón
    
  })
})