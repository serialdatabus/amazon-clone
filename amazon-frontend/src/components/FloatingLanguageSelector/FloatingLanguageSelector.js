import React, { useEffect, useState } from "react";
import "../../styles/FloatingLanguageSelector.css";
import { renderLanguages } from "./controllers";

export const FloatingLanguageSelector = ({ isvisible }) => {
  const [selectedvalue, setselectedvalue] = useState("en");

  const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

  const onSelectedLanguage = ({e , code_language}) => {

    e.preventDefault();
           
    setselectedvalue(code_language);


  }

  useEffect(() => {
    return () => {};
  }, []);



  React.useEffect(() => {

    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
   //   timeoutId = setTimeout(() => setWidth(getWidth()), 150);


      console.log(getWidth());


    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

  },[])




  return (
    <div
      style={{ left: 0, top: "100%" }}
      id="floating-language-selector"
      className={isvisible ? "visible" : ""}
    >
      <div className="title-change-language">
        <span>Change language</span>
        <a href="/">Learn more</a>
      </div>

      {renderLanguages({code_language: selectedvalue,onSelectedLanguage})}
    </div>
  );
};
