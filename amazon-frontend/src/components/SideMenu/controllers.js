import {
  faArrowLeft,
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  fonticon,
  getCategoryBySlug,
  getMainCategories,
  getSubCategories,
} from "../../helpers/helpers";

export const resetSideMenuState = ({
  setsubcategoriesisopened,
  setshowallcategories,
}) => {
  setsubcategoriesisopened(false);
  setshowallcategories(false);
};

export const navigateToCategoryPage = (controllersParams) => {
  const { onCloseSideMenu } = controllersParams;

  onCloseSideMenu();
  resetSideMenuState(controllersParams);
};

export const openSubCategories = ({
  slug,
  setcurrentSelectedCategory,
  setsubcategoriesisopened,
}) => {
  setcurrentSelectedCategory(slug);
  setsubcategoriesisopened(true);
};

export const gobackToMainMenu = ({ e, setsubcategoriesisopened }) => {
  e.preventDefault();
  setsubcategoriesisopened(false);
};

export const loadSideMenuCategories = ({
  setfirstfourcategories,
  setremaincategories,
}) => {
  setfirstfourcategories(getMainCategories().slice(0, 4));
  setremaincategories(getMainCategories().slice(4));
};

// beginning render functions

export const renderCategories = ({
  categories_to_render,
  section_title,
  customclass,
  controllersParams,
}) => (
  <ul className={"navigation-drawer-menu " + customclass}>
    {section_title && (
      <li>
        <span className="title-menu">{section_title}</span>
      </li>
    )}

    {categories_to_render.map((item) => {
      const subcategories = getSubCategories(item.slug);
      const hasSubCategory = subcategories.length > 0;

      return (
        <li key={item.slug}>
          <a
            onClick={(e) => {
              e.preventDefault();

              if (!hasSubCategory) {
                navigateToCategoryPage(controllersParams);
              } else {
                openSubCategories({ slug: item.slug, ...controllersParams });
              }
            }}
            href="/"
          >
            <span>{item.displayname}</span>

            {hasSubCategory && fonticon(faChevronRight, "icon-open-submenu")}
          </a>
        </li>
      );
    })}
  </ul>
);

export const renderSubCatSideMenu = (controllersParams) => {
  const { currentSelectedCategory } = controllersParams;

  const categories_to_render = getSubCategories(currentSelectedCategory);
  const section_title = getCategoryBySlug(currentSelectedCategory).displayname;
  return (
    <ul className="navigation-drawer-menu sub-categories">
      <li className="title-sub-categories-menu">
        <a
          href="/"
          onClick={(e) => gobackToMainMenu({ e, ...controllersParams })}
        >
          {fonticon(faArrowLeft, "icon-open-submenu")}
          <span>MAIN MENU</span>
        </a>
      </li>

      <li className="list-divisor"></li>
      {renderCategories({
        categories_to_render,
        section_title,
        controllersParams,
      })}
    </ul>
  );
};

export const renderTransparentBackground = (controllersParams) => {
  const { onCloseSideMenu, opened } = controllersParams;

  return (
    <div
      onClick={() => {
        onCloseSideMenu();
        resetSideMenuState(controllersParams);
      }}
      id="sidemenu-bg-transparent"
      className={opened ? " opened" : ""}
    ></div>
  );
};

export const renderSeeAllButton = ({
  showallcategories,
  setshowallcategories,
}) => (
  <li className="see-all-button">
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        setshowallcategories(!showallcategories);
      }}
    >
      <span>{ !showallcategories ? "See All" : "See Less"}</span>
      {!showallcategories && fonticon(faChevronDown, "icon-open-submenu")}
      {showallcategories && fonticon(faChevronUp, "icon-open-submenu")}
    </a>
  </li>
);

export const renderSettings = () => {
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

// end render functions
