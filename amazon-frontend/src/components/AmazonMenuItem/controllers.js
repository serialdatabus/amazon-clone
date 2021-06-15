export const handleMouseEnter = (controllerParams) => {
  const { setshowFloatMenu, onHover, defaultMenuItem } = controllerParams;

  if (defaultMenuItem) return;

  setshowFloatMenu(true);
  onHover();
};

export const handleMouseleave = (controllerParams) => {
  const { setshowFloatMenu, onLeave, defaultMenuItem } = controllerParams;

  if (defaultMenuItem) return;

  setshowFloatMenu(false);
  onLeave();
};
