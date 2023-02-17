import "../css/SlideShow.css";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import { ReactComponent as FlechaIzqda } from "../img/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDcha } from "../img/iconmonstr-angel-right-thin.svg";
import { ContenedorPrincipal } from "./css/ContenedorPrincipal";
import { ContenedorSlideshow } from "./css/ContenedorSlideShow";
import { TextoSlide } from "./css/TextoSlide"
import { Slide } from "./css/Slide";
import { Controles } from "./css/Controles";
import { Boton } from "./css/Boton";
import { useRef } from "react";



const SlideShow = () => {
  const slideShow =useRef(null);
  const next = ()=> {
    
    if(slideShow.current.children.length > 0) {

      //Obtenemos el primer elemento de las imágenes
      const firstElement = slideShow.current.children[0];

      //Establecemos la transición para el slideShow
      slideShow.current.style.transition = `300ms ease-out all`;
      
      //Buscamos el width de la imagen para moverla
      const slideWidth = slideShow.current.children[0].offsetWidth;

      //Movemos el slideShow
      slideShow.current.style.transform = `translateX(-${slideWidth}px)`;

      const transition = () => {
        //Reiniciamos la posición del slideShow
        slideShow.current.style.transition = 'none';
        slideShow.current.style.transform = 'translateX(0)';    
        
        //Tomamos el 1º elemento y lo enviamos al final
        slideShow.current.appendChild(firstElement);
      }

      //Event Listener para cuando termine la animación
      slideShow.current.addEventListener('transitioned', transition);

    };
  }
  
  const previous = ()=> {
    console.log('Anterior');
    console.log(slideShow.current);
  }
  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideShow}>
        <Slide>
          <a href="http://www.darthvader.es">
            <img src={img1} alt="img1" />
          </a>
          <TextoSlide>15% de descuento en productos Garmin</TextoSlide>
        </Slide>
        <Slide>
          <a href="http://www.darthvader.es">
            <img src={img2} alt="img2" />
          </a>
          <TextoSlide>15% de descuento en productos Rolex</TextoSlide>
        </Slide>
        <Slide>
          <a href="http://www.darthvader.es">
            <img src={img3} alt="img3" />
          </a>
          <TextoSlide>15% de descuento en productos Rolex</TextoSlide>
        </Slide>
        <Slide>
          <a href="http://www.darthvader.es">
            <img src={img4} alt="img4" />
          </a>
          <TextoSlide colorFondo="navy" colorTexto="#FFF">15% de descuento en productos Rolex</TextoSlide>
        </Slide>
      </ContenedorSlideshow>
      <Controles>
        <Boton onClick={previous}>
          <FlechaIzqda />
        </Boton>
        <Boton derecho onClick={next}>
          <FlechaDcha />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

export default SlideShow;
