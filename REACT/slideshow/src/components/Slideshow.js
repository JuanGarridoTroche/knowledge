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

const SlideShow = () => {
  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow>
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
        <Boton>
          <FlechaIzqda />
        </Boton>
        <Boton derecho>
          <FlechaDcha />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

export default SlideShow;
