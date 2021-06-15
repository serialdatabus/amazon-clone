import React, {  useEffect, useLayoutEffect, useState } from "react";
import "../../styles/AmazonMenuItem.css";

export default function AamzonMenuItem(props) {
  const { children, className, labelcomponent, onHover, onLeave, isVisible } =
    props;

  const [showFloatMenu, setshowFloatMenu] = useState(isVisible);
  const [defaultMenuItem, setdefaultMenuItem] = useState(false);

  /*
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
*/
  let timeoutId = null;
  const resizeListener = () => {
    clearTimeout(timeoutId);

    //console.log(getWidth());
  };

  const handleMousEnter = () => {

    if(defaultMenuItem)
    return;


    setshowFloatMenu(true);
    onHover();
  };

  const handleMouseleave = () => {

    if(defaultMenuItem)
    return;


    setshowFloatMenu(false);
    onLeave();
  };


  useEffect(() => {
      
    
        if(props.default)
        {

            setdefaultMenuItem(true);

        }



      return () => {
         
    
      }
  }, [props.default]);



  useLayoutEffect(() => {
    setshowFloatMenu(isVisible);

    return () => {};
  }, [isVisible]);

  // set resize listener
  window.addEventListener("resize", resizeListener);

  return (
    <div
      className={"amazon-menu-item" + (showFloatMenu ? " showfloatmenu" : "")+ (defaultMenuItem ? " defaultmenuitem" : "")+" "+className}
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
