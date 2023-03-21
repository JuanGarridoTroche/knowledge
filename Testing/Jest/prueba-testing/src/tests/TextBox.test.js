import { render, screen } from "@testing-library/react"
import TextBox from "../components/TextBox"

describe('Componente TextBox.jsx', ()=> {

  let article;
  const setup = () => {
    render(<TextBox/>)
    // screen devuelve getxxx, findxxx para promesas o funciones asíncronas y queryxxx para consultas a la BBDD
    article = screen.getByRole('article', {name:'articulo principal'})
  };

  // beforeAll, beforeEach (antes de cada una de las pruebas), afterAll, afterEach
  beforeEach(()=> {
    // No permite realizar funciones de renderizado porque se puede llegar a anidar.
  })
  // Comprobar si dentro del componente existe un article llamado "articulo principal"
  test('Incluye un article', ()=> {
    setup();
    // render(<TextBox/>)
    
    // const article = screen.getByRole('article', {name:'articulo principal'})
    expect(article).toBeInTheDocument();
  })

  // Que el color de fondo del artículo sea índigo
  test('tiene un color de fondo inicial', ()=> {
    setup();
    // render(<TextBox/>)
    // const article = screen.getByRole('article', {name:'articulo principal'})
    expect(article).toHaveStyle({
      backgroundColor: 'indigo'
    })

    test('Cambia el color del botón si hacemos clic',()=> {
      expect("button").toHaveStyle({backgroundColor:'dodgerblue'})
    })
  })
})