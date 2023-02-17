import 'react-slideshow-image/dist/styles.css'
import "../css/Carousel.css";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import { Slide } from "react-slideshow-image";

const Carousel = () => {
  return (
    <Slide autoplay='false'>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${img1})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${img2})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${img3})` }}>
          <span>Slide 3</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${img4})` }}>
          <span>Slide 4</span>
        </div>
      </div>
    </Slide>
  );
};

export default Carousel;
