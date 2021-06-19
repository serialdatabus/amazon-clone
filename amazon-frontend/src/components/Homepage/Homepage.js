import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AmazonCarousel from "./AmazonCarousel";
import AmazonBlock from "../AmazonBlock/AmazonBlock";
import "../../styles/Homepage.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { blockhello } from "./controllers";
import AmazonFeedCarousel from "../AmazonFeedCarousel/AmazonFeedCarousel";

const Homepage = () => {
  return (
    <div id="homepage">
      <AmazonCarousel />

      <div id="home-content-block">
        <div className="amazon-blocks-container main">
          <AmazonBlock
            type="group"
            title="Hi, Elizeu"
            icon={faUser}
            subtitle="Recommendations for you"
            labelBottomLink="Shop Now"
            urlBottomLink="/"
            data={blockhello}
          />

          <AmazonBlock
            type="history"
            title="Recently viewed"
            subtitle=""
            labelBottomLink="See your browsing history"
            urlBottomLink="/"
            data={blockhello}
          />

          <AmazonBlock
            type="single"
            title="Oculus"
            icon={faUser}
            labelBottomLink="Shop Now"
            urlBottomLink="/"
            data={blockhello}
          />

          <AmazonBlock
            type="history"
            title="Recently viewed"
            subtitle=""
            labelBottomLink="See your browsing history"
            urlBottomLink="/"
            data={blockhello}
          />
        </div>

        <div className="amazon-blocks-container">
          <AmazonBlock
            type="group"
            title="Hi, Elizeu"
            icon={faUser}
            subtitle="Recommendations for you"
            labelBottomLink="Shop Now"
            urlBottomLink="/"
            data={blockhello}
          />

          <AmazonBlock
            type="history"
            title="Recently viewed"
            subtitle=""
            labelBottomLink="See your browsing history"
            urlBottomLink="/"
            data={blockhello}
          />

          <AmazonBlock
            type="group"
            title="Hi, Elizeu"
            icon={faUser}
            subtitle="Recommendations for you"
            labelBottomLink="Shop Now"
            urlBottomLink="/"
            data={blockhello}
          />

          <AmazonBlock
            type="history"
            title="Recently viewed"
            subtitle=""
            labelBottomLink="See your browsing history"
            urlBottomLink="/"
            data={blockhello}
          />
        </div>
     
     

        <AmazonFeedCarousel imageHeight="13em" imageWidth="13em" />

    
      <br/>
         
      <br/>
     
      </div>
    </div>
  );
};

export default Homepage;
 