import React, { useState } from "react";
import "../../styles/AmazonMenuItem.css";

export default function AamzonMenuItem({
  children,
  labelcomponent,
  onHover,
  onLeave,
  isVisible
}) {


    const [showFloatMenu, setshowFloatMenu] = useState(isVisible);


  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  let timeoutId = null;
  const resizeListener = () => {
  


    clearTimeout(timeoutId);


    console.log(getWidth());
  };

  const handleMousEnter = () => {
    setshowFloatMenu(true);
    onHover();
  };

  const handleMouseleave = () => {
    setshowFloatMenu(false);
    onLeave();
  };

  // set resize listener
  window.addEventListener("resize", resizeListener);

  return (
    <div
      className={"amazon-menu-item"+(showFloatMenu ? " showfloatmenu":"")}
      onMouseEnter={handleMousEnter}
      onMouseLeave={handleMouseleave}
    >
      <div className="container1">
        <div className="button-content">{labelcomponent}</div>

        <div className="arrows">
          <span className="dropwodwn"></span>
        </div>
      </div>

      <div className="container2">
        <span>
          <span className="floatingmenu-arrow"></span>
        </span>

        <div className="float-menu-container">{children}</div>
      </div>
    </div>
  );
}
