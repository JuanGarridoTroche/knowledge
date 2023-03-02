import { useState } from "react";
import "../css/Slider.css";

const Slider = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Si no hay fotos en photos (photos=[]), le añadimos la imagen de "no hay fotos".
  if (!Array.isArray(photos) || photos.length < 1) {
    photos = ["/no-images.jpg"];
  }
  // Comprobamos cuantas fotos hay en el array. Si solo hay 1, no muestres las flechas
  const totalPhotos = photos?.length;

  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === totalPhotos - 1 ? 0 : currentPhoto + 1);
  };

  const previousPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? totalPhotos - 1 : currentPhoto - 1);
  };

  return (
    <div className="container">
      {totalPhotos === 1 ? null : (
        <button
          onClick={() => {
            previousPhoto();
          }}
        >
          <img src="/left.svg" alt="left" />
        </button>
      )}
      {photos.map((photo, index) => {
        return (
          <div>
            {" "}
            {currentPhoto === index && (
              <img src={photo} key={index} alt="imagen al azar" />
            )}
          </div>
        );
      })}
      {totalPhotos === 1 ? null : (
        <button
          onClick={() => {
            nextPhoto();
          }}
        >
          <img src="/right.svg" alt="right" />
        </button>
      )}
    </div>
  );
};

export default Slider;
