export const resetSideMenuState = ({
  setsubcategoriesisopened,
  setshowallcategories,
}) => {
  setsubcategoriesisopened(false);
  setshowallcategories(false);
};

export const navigateToCategoryPage = (localstate) => {
  const { onCloseSideMenu } = localstate;

  onCloseSideMenu();
  resetSideMenuState(localstate);
};

export const openSubCategories = ({
  slug,
  setcurrentSelectedCategory,
  setsubcategoriesisopened,
}) => {
  setcurrentSelectedCategory(slug);
  setsubcategoriesisopened(true);
};
/*
  export const gobackToMainMenu = (e) => {
    e.preventDefault();
    setsubcategoriesisopened(false);
  };
*/
