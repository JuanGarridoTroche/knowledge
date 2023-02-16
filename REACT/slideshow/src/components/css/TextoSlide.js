import styled from "styled-components";


// Estilamos los elementos párrafo "p"
export const TextoSlide = styled.div`
  background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0, 0, 0, .5)'};
  color ${props => props.colorTexto ? props.colorTexto : '#FFF'};;
  width 100%;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 700px) {
    position: relative;
    background-color: black;
    font-size: 1.4rem;
  }
`;