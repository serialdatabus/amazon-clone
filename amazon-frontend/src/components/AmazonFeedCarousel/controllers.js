export const componentController = ({
  carouselwidth,
  setCarouselWidth,
  itemslistwidth,
  setItemsListWidth,
  currentPosition,
  setCurrentPosition,
  imageItemWidth,
  setImageItemWidth,
  xPosStart,
  setXPosStart,
  step,
  setStep,
  isDragging,
  setIsDragging,
  barPosition,
  setBarPosition,
  refCarousel,
  refItemsList,
  onDragHandler,
  onStartDrag,
  onEndDrag,
}) => ({
  goLeft: (e) => {
    e.preventDefault();

    if (itemslistwidth <= carouselwidth) return;

    let nextPos = currentPosition + step;
    nextPos = nextPos > 0 ? 0 : nextPos;
    setCurrentPosition(nextPos);
    const _tmp_bar_position_percent = Math.abs(nextPos) / itemslistwidth;
    setBarPosition(_tmp_bar_position_percent * carouselwidth);
  },

  goRight: (e) => {
    e.preventDefault();

    if (itemslistwidth <= carouselwidth) return;

    let nextPos = currentPosition - step;
    console.log(nextPos);
    nextPos =
      nextPos < carouselwidth - itemslistwidth
        ? carouselwidth - itemslistwidth
        : nextPos;
    setCurrentPosition(nextPos);
    const _tmp_bar_position_percent = Math.abs(nextPos) / itemslistwidth;
    //console.log(_tmp_bar_position * carouselwidth);
    setBarPosition(_tmp_bar_position_percent * carouselwidth);
  },
  callBackUpdateDimensions: () => {
    const _carouselwidth = refCarousel.current
      ? refCarousel.current.offsetWidth
      : 0;

    const _itemslistwidth = refItemsList.current
      ? refItemsList.current.offsetWidth
      : 0;

    console.log("carouselwidth: " + _carouselwidth);
    setCarouselWidth(_carouselwidth);

    console.log("itemslistwidth: " + _itemslistwidth);
    setItemsListWidth(_itemslistwidth);

    setStep(_carouselwidth);
  },

  getBarWidthPercent: () => (carouselwidth / itemslistwidth) * 100,

  onDragHandler: (e, data) => {
    const { deltaX } = data;
    console.clear();
    console.log("data");
    const limit_bar =
      carouselwidth -
      (((carouselwidth / itemslistwidth) * 100) / 100) * carouselwidth;
    let tmp_pos = barPosition + deltaX;
    if (tmp_pos < 0) tmp_pos = 0;
    if (tmp_pos > limit_bar) tmp_pos = limit_bar;

    const percentBarMoved = tmp_pos / carouselwidth;

    setCurrentPosition(0 - percentBarMoved * itemslistwidth);

    setBarPosition(tmp_pos);
    console.log(barPosition);
  },

  onStartDrag: (e) => {
    setIsDragging(true);
  },

  onEndDrag: () => {
    setIsDragging(false);
  },
});
