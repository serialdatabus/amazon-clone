import React, { useEffect, useState } from "react";
import "../../styles/SideMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faUser,
  faTimes,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { getMainCategories } from "../../helpers/helpers";

const renderCategories = (categories_to_render, section_title, customclass) => (
  <ul className={"navigation-drawer-menu " + customclass}>
    {section_title && (
      <li>
        <span className="title-menu">{section_title}</span>
      </li>
    )}

    {categories_to_render.map((item) => {
      return (
        <li key={item.slug}>
          <a href="/">
            <span>{item.displayname}</span>

            <FontAwesomeIcon
              className="icon-open-submenu"
              icon={faChevronRight}
            />
          </a>
        </li>
      );
    })}
  </ul>
);

const renderSettings = () => {
  return (
    <>
      <li className="list-divisor"></li>
      <li>
        <span className="title-menu">Help & Settings</span>
      </li>
      <li>
        <a href="/">
          <span>Your Account</span>
        </a>
      </li>

      <li className="list-settings">
        <a href="/">
          <FontAwesomeIcon className="icon-open-submenu" icon={faGlobe} />
          <span>English</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Sign Out</span>
        </a>
      </li>
    </>
  );
};

export default function SideMenu({ opened }) {
  const [firstfourcategories, setfirstfourcategories] = useState([]);
  const [remaincategories, setremaincategories] = useState([]);
  const [showallcategories, setshowallcategories] = useState(false);

  useEffect(() => {
    setfirstfourcategories(getMainCategories().slice(0, 4));
    setremaincategories(getMainCategories().slice(4));

    return () => {};
  }, []);

  return (
    <div className="sidemenu" id="sidemenu">
      <FontAwesomeIcon
        color="white"
        className="icon-close-sidemenu"
        icon={faTimes}
      />

      <div className="navigation-drawer">
        <div className="header-user">
          <FontAwesomeIcon color="white" className="icon-user" icon={faUser} />
          <a href="/">Hello, Elizeu</a>
        </div>

        <div className="menu-content">
          {renderCategories(firstfourcategories, "Shop By department")}
          {renderCategories(
            remaincategories,
            "",
            "remain-categories-list" + (showallcategories ? " expanded" : "")
          )}
          <ul className={"navigation-drawer-menu"}>
            <li class="see-all-button">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setshowallcategories(!showallcategories);
                }}
              >
                <span>See All</span>
                {!showallcategories && (
                  <FontAwesomeIcon
                    className="icon-open-submenu"
                    icon={faChevronDown}
                  />
                )}
                {showallcategories && (
                  <FontAwesomeIcon
                    className="icon-open-submenu"
                    icon={faChevronUp}
                  />
                )}
              </a>
            </li>
            {renderSettings()}
          </ul>
        </div>
      </div>
    </div>
  );
}
