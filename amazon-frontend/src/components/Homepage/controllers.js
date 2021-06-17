import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { fonticon } from "../../helpers/helpers";

export const imagesList = [
  {
    image_url:
      "https://images-eu.ssl-images-amazon.com/images/G/30/em/pd21/xcm_em_Prime_Day_2021_858-ESES_D_PDS-HP-Tall-Hero_1500x600._CB665999375_.jpg",
    link: "https://youtube.com",
  },

  {
    image_url:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg",
    link: "https://youtube.com",
  },
  {
    image_url:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
    link: "https://youtube.com",
  },
];

export const Arrow = (props) => {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? fonticon(faChevronRight) : fonticon(faChevronLeft);
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
};

export const AmazonCarouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "amazon-carousel",
  nextArrow: <Arrow type="next" />,
  prevArrow: <Arrow />,
};
