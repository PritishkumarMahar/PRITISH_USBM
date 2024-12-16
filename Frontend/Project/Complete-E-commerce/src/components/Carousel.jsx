import { useState } from "react";
import "./Carousel.css";

const images = [
  "https://via.placeholder.com/800x300?text=Slide+1",
  "https://via.placeholder.com/800x300?text=Slide+2",
  "https://via.placeholder.com/800x300?text=Slide+3",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-btn prev-btn">❮</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={nextSlide} className="carousel-btn next-btn">❯</button>
    </div>
  );
};

export default Carousel;
