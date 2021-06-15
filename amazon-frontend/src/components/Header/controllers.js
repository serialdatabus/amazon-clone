import { ReactComponent as UsaFlag } from "../../assets/usaicon.svg";
import { ReactComponent as SpainFlag } from "../../assets/spainicon.svg";
import { ReactComponent as PortugalFlag } from "../../assets/portugalicon.svg";
import { ReactComponent as GermanyFlag } from "../../assets/germanyicon.svg";
import { ReactComponent as SouthKoreaFlag } from "../../assets/southkoreaicon.svg";

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

export const getFlagComponent = (country_code, size) => {
  const flags = {
    en: <UsaFlag width={size} />,
    es: <SpainFlag width={size} />,

    de: <GermanyFlag width={size} />,

    pt: <PortugalFlag width={size} />,

    ko: <SouthKoreaFlag width={size} />,
  };

  return flags[country_code];
};
