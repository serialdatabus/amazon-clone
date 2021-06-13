import React, { useEffect, useState } from "react";
import "../../styles/SideMenu.css";
import { faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import { fonticon } from "../../helpers/helpers";
import {
  renderCategories,
  renderSeeAllButton,
  renderSubCatSideMenu,
  renderTransparentBackground,
  renderSettings,
  loadSideMenuCategories,
} from "./controllers";

export default function SideMenu({ opened, onCloseSideMenu }) {
  const [firstfourcategories, setfirstfourcategories] = useState([]);
  const [remaincategories, setremaincategories] = useState([]);
  const [showallcategories, setshowallcategories] = useState(false);
  const [subcategoriesisopened, setsubcategoriesisopened] = useState(false);
  const [currentSelectedCategory, setcurrentSelectedCategory] = useState("");

  // "controllersParams" object is used as way to transfer the current component state and other essencial variables
  // to the controllers
  //That allow us to update the component state outside the function component
  const controllersParams = {
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
    onCloseSideMenu,
    opened,
  };

  useEffect(() => {
    loadSideMenuCategories({
      setfirstfourcategories,
      setremaincategories,
    });
  }, []);

  return (
    <>
      {renderTransparentBackground(controllersParams)}

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
              {renderCategories({
                categories_to_render: firstfourcategories,
                section_title: "Shop By department",
                customclas: "main",
                controllersParams,
              })}
              {renderCategories({
                categories_to_render: remaincategories,
                section_title: "",
                customclas:
                  "remain-categories-list main" +
                  (showallcategories ? " expanded" : ""),
                controllersParams,
              })}

              <ul className="navigation-drawer-menu main">
                {renderSeeAllButton(controllersParams)}
                {renderSettings("main")}
              </ul>
            </div>
            <div
              className={
                "menu-content sub-categories" +
                (subcategoriesisopened ? " opened-subcategories" : "")
              }
            >
              {renderSubCatSideMenu(controllersParams)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
