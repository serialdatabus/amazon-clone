import React from "react";
import "../../styles/AmazonMenuItem.css";

export default function AamzonMenuItem({ children, labelcomponent }) {
  return (
    <div className="amazon-menu-item">
      <div class="container1">
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
