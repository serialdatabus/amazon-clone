export const languageSelectMouseEvents = ({
  dispatch,
  showTransparentBg,
  hideTransparentBg,
}) => ({
  onMouseEnter: () => {
    dispatch(showTransparentBg());
  },

  onMouseLeave: () => {
    dispatch(hideTransparentBg());
  },
});
