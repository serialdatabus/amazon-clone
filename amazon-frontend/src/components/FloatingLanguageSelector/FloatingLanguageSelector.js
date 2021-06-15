import React, { useEffect, useState } from "react";
import "../../styles/FloatingLanguageSelector.css";
import { renderLanguages } from "./controllers";

export const FloatingLanguageSelector = ({ isvisible }) => {
  const [selectedvalue, setselectedvalue] = useState("en");



  const onSelectedLanguage = ({e , code_language}) => {

    e.preventDefault();
           
    setselectedvalue(code_language);


  }

  useEffect(() => {
    return () => {};
  }, []);



  React.useEffect(() => {



  },[])




  return (
    <div
      style={{ left: 0, top: "100%" }}
 
      className={"floating-language-selector"+(isvisible ? " visible" : "")}
    >
      <div className="title-change-language">
        <span>Change language</span>
        <a href="/">Learn more</a>
      </div>

      {renderLanguages({code_language: selectedvalue,onSelectedLanguage})}
    </div>
  );
};
