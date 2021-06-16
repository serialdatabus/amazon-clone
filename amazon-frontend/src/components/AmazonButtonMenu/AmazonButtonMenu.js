import React, { useState } from "react";
import "../../styles/AmazonButtonMenu.css";
const AmazonButtonMenu = ({
  onHover,
  onLeave,
  labelComponent,
  children,
  onClick,
  className
}) => {
  const [showFloatMenu, setShowFloatMenu] = useState(false);
  let timeoutId = null;
  return (
    <div
      className={"amazon-button-menu "+className}

      onClick={onClick}
  
      onMouseEnter={() => {
        if (!children || !onHover) return;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          setShowFloatMenu(true);
          onHover();
        }, 220);
      }}
      onMouseLeave={() => {
        if (!children || !onLeave) return;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          setShowFloatMenu(false);
          onLeave();
        }, 220);
      }}
    >
      <div className="btn-content">{labelComponent}</div>
      {children && (
        <div className="arrows">
          <div className="arrow-top"></div>
          {showFloatMenu && <div className="arrow-bottom"></div>}
        </div>
      )}
      {showFloatMenu && children && <div className="content-button-menu"></div>}
    </div>
  );
};

export default AmazonButtonMenu;
