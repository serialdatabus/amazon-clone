import React, { useEffect, useState } from "react";
import "../../styles/SideMenu.css";
import {
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faUser,
  faTimes,
  faGlobe,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  getMainCategories,
  getSubCategories,
  fonticon,
  getCategoryBySlug,
} from "../../helpers/helpers";
import { navigateToCategoryPage  , resetSideMenuState , openSubCategories} from "./controllers";


export default function SideMenu({ opened, onCloseSideMenu }) {
  const [firstfourcategories, setfirstfourcategories] = useState([]);
  const [remaincategories, setremaincategories] = useState([]);
  const [showallcategories, setshowallcategories] = useState(false);
  const [subcategoriesisopened, setsubcategoriesisopened] = useState(false);
  const [currentSelectedCategory, setcurrentSelectedCategory] = useState("");

  const localState = {  
    firstfourcategories,
    remaincategories,
    showallcategories,
    subcategoriesisopened,
    currentSelectedCategory,
    setfirstfourcategories,
    setremaincategories,
    setshowallcategories,
    setsubcategoriesisopened,
    setcurrentSelectedCategory,
    onCloseSideMenu
  }

  useEffect(() => {
      
    setfirstfourcategories(getMainCategories().slice(0, 4));
    setremaincategories(getMainCategories().slice(4));

    return () => {};
  }, []);







  const gobackToMainMenu = (e) => {
    e.preventDefault();
    setsubcategoriesisopened(false);
  };







  // start rendering functions

  const renderTransparentBackground = () => (
    <div
      onClick={() => {
        onCloseSideMenu();
        resetSideMenuState(localState);
      }}
      id="sidemenu-bg-transparent"
      className={opened ? " opened" : ""}
    ></div>
  );

  const renderCategories = (
    categories_to_render,
    section_title,
    customclass
  ) => (
    <ul className={"navigation-drawer-menu " + customclass}>
      {section_title && (
        <li>
          <span className="title-menu">{section_title}</span>
        </li>
      )}

      {categories_to_render.map((item) => {
        const subcategories = getSubCategories(item.slug);
        const total_sub_cats_found = subcategories.length;

        return (
          <li key={item.slug}>
            <a
              onClick={(e) => {
                e.preventDefault();

                if (total_sub_cats_found === 0) {
                  navigateToCategoryPage(localState);
                } else {
                  openSubCategories({slug: item.slug,...localState});
                }
              }}
              href="/"
            >
              <span>{item.displayname}</span>

              {total_sub_cats_found > 0 &&
                fonticon(faChevronRight, "icon-open-submenu")}
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
            {fonticon(faGlobe, "icon-open-submenu")}
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

  const renderSubCatSideMenu = () => {
    return (
      <ul className="navigation-drawer-menu sub-categories">
        <li className="title-sub-categories-menu">
          <a href="/" onClick={gobackToMainMenu}>
            {fonticon(faArrowLeft, "icon-open-submenu")}
            <span>MAIN MENU</span>
          </a>
        </li>

        <li className="list-divisor"></li>
        {renderCategories(
          getSubCategories(currentSelectedCategory),
          getCategoryBySlug(currentSelectedCategory).displayname
        )}
      </ul>
    );
  };

  const renderSeeAllButton = () => (
    <li className="see-all-button">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setshowallcategories(!showallcategories);
        }}
      >
        <span>See All</span>
        {!showallcategories && fonticon(faChevronDown, "icon-open-submenu")}
        {showallcategories && fonticon(faChevronUp, "icon-open-submenu")}
      </a>
    </li>
  );

  // end rendering functions

  return (
    <>
      {renderTransparentBackground()}

      <div className={"sidemenu" + (opened ? " opened" : "")} id="sidemenu">
        {fonticon(faTimes, "icon-close-sidemenu", onCloseSideMenu)}

        <div className="navigation-drawer">
          <div className="header-user">
            {fonticon(faUser, "icon-user")}
            <a href="/">Hello, Elizeu</a>
          </div>

          <div id="container-side-menus">
            <div
              className={
                "menu-content main" +
                (subcategoriesisopened ? " opened-subcategories" : "")
              }
            >
              {renderCategories(
                firstfourcategories,
                "Shop By department",
                "main"
              )}
              {renderCategories(
                remaincategories,
                "",
                "remain-categories-list main" +
                  (showallcategories ? " expanded" : "")
              )}

              <ul className="navigation-drawer-menu main">
                {renderSeeAllButton()}
                {renderSettings("main")}
              </ul>
            </div>
            <div
              className={
                "menu-content sub-categories" +
                (subcategoriesisopened ? " opened-subcategories" : "")
              }
            >
              {renderSubCatSideMenu()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
