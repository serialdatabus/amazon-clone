import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { fonticon } from "../../helpers/helpers";

export const imagesList = [
  {
    image_url:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
    link: "https://youtube.com",
  },
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
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 6000,
};

export const blockhello = [
  {
    image_url: "https://m.media-amazon.com/images/I/41qsnBY6yZL._AC_SY200_.jpg",
    label: "Your Orders",
    url: "https://www.amazon.com/Instant-Pot-Multi-Use-Programmable-Pressure/dp/B00FLYWNYQ/?_encoding=UTF8&pd_rd_w=StUxV&pf_rd_p=9ac1d1b4-9983-4d1d-86fc-05f697271072&pf_rd_r=TB4B7NZ1YTT0SQBG4APS&pd_rd_r=7c6f913b-b32b-4dfc-aaf8-70df7d3e8252&pd_rd_wg=go6Cw&ref_=pd_gw_unk",
  },
  {
    image_url: "https://m.media-amazon.com/images/I/31ZXXTy7wMS._AC_SY200_.jpg",
    label: "Your Orders",
    url: "https://www.amazon.com/Instant-Pot-Multi-Use-Programmable-Pressure/dp/B00FLYWNYQ/?_encoding=UTF8&pd_rd_w=StUxV&pf_rd_p=9ac1d1b4-9983-4d1d-86fc-05f697271072&pf_rd_r=TB4B7NZ1YTT0SQBG4APS&pd_rd_r=7c6f913b-b32b-4dfc-aaf8-70df7d3e8252&pd_rd_wg=go6Cw&ref_=pd_gw_unk",
  },
  {
    image_url: "https://m.media-amazon.com/images/I/51q0meZK6WL._AC_SY200_.jpg",
    label: "Your Orders",
    url: "https://www.amazon.com/Instant-Pot-Multi-Use-Programmable-Pressure/dp/B00FLYWNYQ/?_encoding=UTF8&pd_rd_w=StUxV&pf_rd_p=9ac1d1b4-9983-4d1d-86fc-05f697271072&pf_rd_r=TB4B7NZ1YTT0SQBG4APS&pd_rd_r=7c6f913b-b32b-4dfc-aaf8-70df7d3e8252&pd_rd_wg=go6Cw&ref_=pd_gw_unk",
  },
  {
    image_url: "https://m.media-amazon.com/images/I/41XMZLW8zbL._AC_SY200_.jpg",
    label: "Your Orders",
    url: "https://www.amazon.com/Instant-Pot-Multi-Use-Programmable-Pressure/dp/B00FLYWNYQ/?_encoding=UTF8&pd_rd_w=StUxV&pf_rd_p=9ac1d1b4-9983-4d1d-86fc-05f697271072&pf_rd_r=TB4B7NZ1YTT0SQBG4APS&pd_rd_r=7c6f913b-b32b-4dfc-aaf8-70df7d3e8252&pd_rd_wg=go6Cw&ref_=pd_gw_unk",
  },
];
