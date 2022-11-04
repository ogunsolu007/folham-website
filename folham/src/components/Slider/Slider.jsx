import { useState, useEffect } from "react";
import { slides } from "../../constants/data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slider = () => {
  const [slide, setSlide] = useState(slides);
  const [index, setIndex] = useState(0);

  return (
    <div className="flex hero_img-section">
      { slide.map((slide, slideIndex) => {
        const { id, img, name } = slide;
        return (
          <div className="slide-div" key={id}>
            <img src={slide.img} alt={name} />
          </div>
        );
      })} 

      <button className="control left">
        <FiChevronLeft />
      </button>
      <button className="control right">
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slider;
