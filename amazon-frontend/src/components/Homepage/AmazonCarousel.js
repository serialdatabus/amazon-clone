import React /*useState*/ from "react";
import Slider from "react-slick";
import { AmazonCarouselSettings, imagesList } from "./controllers";

const AmazonCarousel = () => {
  //const [images, setImages] = useState(imagesList);

  return (
    <Slider {...AmazonCarouselSettings}>
      {imagesList.map((item, index) => (
        <div key={index} className="item-slider">
          <a href={item.link}>
            <img alt="" src={item.image_url} />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default AmazonCarousel;
