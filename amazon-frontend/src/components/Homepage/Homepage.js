import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import AmazonCarousel from "./AmazonCarousel";
import '../../styles/Homepage.css';
import AmazonBlock from "../AmazonBlock/AmazonBlock";


const Homepage = () => {
  return <div id="homepage">
      


            <AmazonCarousel />



            <div className="amazon-blocks-container">
                <AmazonBlock />

                <AmazonBlock />

                <AmazonBlock />


                <AmazonBlock />
            </div>

            



  </div>;
};

export default Homepage;
