import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { fonticon } from "../../helpers/helpers";
import "../../styles/AmazonFeedCarousel.css";
import { componentController } from "./controllers";
import { DraggableCore } from "react-draggable";

const AmazonFeedCarousel = ({
  imageHeight,
  imageWidth,
  headerTitle,
  titleLink,
  urlLink,
  data,
}) => {
  const refCarousel = useRef(null);
  const refItemsList = useRef(null);
  const refImageItem = useRef(null);

  const [carouselwidth, setCarouselWidth] = useState(0);
  const [itemslistwidth, setItemsListWidth] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [imageItemWidth, setImageItemWidth] = useState(0);
  const [xPosStart, setXPosStart] = useState(0); //
  const [step, setStep] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [barPosition, setBarPosition] = useState(0);

  const {
    callBackUpdateDimensions,
    goLeft,
    goRight,
    getBarWidthPercent,
    onDragHandler,
    onStartDrag,
    onEndDrag,
  } = componentController({
    carouselwidth,
    setCarouselWidth,
    itemslistwidth,
    setItemsListWidth,
    currentPosition,
    setCurrentPosition,
    imageItemWidth,
    setImageItemWidth,
    xPosStart,
    setXPosStart,
    step,
    setStep,
    isDragging,
    setIsDragging,
    barPosition,
    refCarousel,
    refItemsList,
    setBarPosition,
  });

  const updateDimensions = useCallback(callBackUpdateDimensions, [
    callBackUpdateDimensions,
  ]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {};
  }, [updateDimensions]);

  return (
    <div class="container-amazon-feed-carousel">
      {headerTitle === "" && urlLink === "" && (
        <div style={{ padding: 12 }}></div>
      )}
      <div class="header-info">
        {headerTitle && <h2>{headerTitle}</h2>}
        {titleLink && <a href={urlLink}>{titleLink}</a>}
      </div>
      <div
        className="amazon-feed-carousel"
        style={{ height: imageHeight + 25 }}
        ref={refCarousel}
      >
        <a href="/" onClick={goLeft} className="scroll-left-btn btn-scroll">
          {fonticon(faChevronLeft)}
        </a>
        <a href="/" onClick={goRight} className="scroll-right-btn btn-scroll">
          {fonticon(faChevronRight)}
        </a>

        <div
          className={"items-list" + (isDragging ? " notransition" : "")}
          style={{ transform: "translateX(" + currentPosition + "px)" }}
          ref={refItemsList}
        >
          {data.map((item, index) => (
            <img
              ref={refImageItem}
              style={{ height: imageHeight, width: imageWidth }}
              alt=""
              key={index}
              src={item.img_url}
            />
          ))}
        </div>

        <div class="carousel-bar-container">
          <DraggableCore
            axis="none"
            onDrag={onDragHandler}
            onStart={onStartDrag}
            onStop={onEndDrag}
          >
            <div
              className={"carousel-bar" + (isDragging ? " notransition" : "")}
              style={{
                left: barPosition,
                width: `${getBarWidthPercent()}%`,
              }}
            ></div>
          </DraggableCore>
        </div>
      </div>
    </div>
  );
};
export default AmazonFeedCarousel;
