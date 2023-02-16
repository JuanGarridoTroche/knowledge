import styled from "styled-components";

// Estilamos los elementos Botón "button"
export const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: .3s ease all;
  &:hover {
    background: rgba(0, 0, 0, .2);
    path {
      fill: #FFF;
      stroke: rgb(130, 130, 130)
    }
  }

  path {
    filter: ${props => props.derecho ? 'drop-shadow(-2px 0 0 #FFF)' : 'drop-shadow(2px 0 0 #FFF)'}
  }

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;
