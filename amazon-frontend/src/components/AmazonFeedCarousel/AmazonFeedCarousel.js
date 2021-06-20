import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { fonticon } from "../../helpers/helpers";
import "../../styles/AmazonFeedCarousel.css";
import { items } from "./controllers";

const AmazonFeedCarousel = ({ imageHeight , imageWidth }) => {
  const refCarousel = useRef(null);
  const refItemsList = useRef(null);

  const [carouselwidth, setCarouselWidth] = useState(0);
  const [itemslistwidth, setItemsListWidth] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [step, setStep] = useState(100);


  const updateDimensions = useCallback(() => {
    const _carouselwidth = refCarousel.current
      ? refCarousel.current.offsetWidth
      : 0;

    const _itemslistwidth = refItemsList.current
      ? refItemsList.current.offsetWidth
      : 0;

    console.log("carouselwidth: " + _carouselwidth);
    setCarouselWidth(_carouselwidth);

    console.log("itemslistwidth: " + _itemslistwidth);
    setItemsListWidth(_itemslistwidth);

    setStep(carouselwidth / 2);
  }, [carouselwidth]);

  const goLeft = (e) => {
    e.preventDefault();
    let nextPos = currentPosition + step;
    nextPos = nextPos > 0 ? 0 : nextPos;
    setCurrentPosition(nextPos);
  };

  const goRight = (e) => {
    e.preventDefault();

    let nextPos = currentPosition - step;
    console.log(nextPos);
    nextPos =
      nextPos < carouselwidth - itemslistwidth
        ? carouselwidth - itemslistwidth
        : nextPos;

    setCurrentPosition(nextPos);
  };

  // useEffect(configureCarousel,[updateDimensions]);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {};
  }, [updateDimensions]);

  return (
    
    <div class="container-amazon-feed-carousel">
    <div className="amazon-feed-carousel" style={{ height: imageHeight }} ref={refCarousel}>
      <a href="/" onClick={goLeft} className="scroll-left-btn btn-scroll">
        {fonticon(faChevronLeft)}
      </a>
      <a href="/" onClick={goRight} className="scroll-right-btn btn-scroll">
        {fonticon(faChevronRight)}
      </a>

      <div
        className="items-list"
        style={{ left: currentPosition }}
        ref={refItemsList}
      >
        {items.map((item, index) => (
          <img style={{ height: imageHeight , width: imageWidth  }} alt="" key={index} src={item.image_url} />
        ))}
      </div>

      <div class="carousel-bar-container">
          <div class="carousel-bar" style={{width: `${   (carouselwidth / itemslistwidth)*100    }%`    }}>

          </div>
      </div>


    </div>

      

    </div>
  );
};
export default AmazonFeedCarousel;
