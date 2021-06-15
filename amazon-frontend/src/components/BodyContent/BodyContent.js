import React from "react";
import { /*useDispatch,*/ useSelector } from "react-redux";
import AmazonMenuItem from "../AmazonMenuItem/AmazonMenuItem";
import { ReactComponent as UsaFlag } from "../../assets/usaicon.svg";

export default function BodyContent() {
  const appstate = useSelector((state) => state.app);
  //const dispatch = useDispatch();
  const classBgVisibility = appstate.transparentBgIsVisible ? " visible" : "";

  const labelcomponent = <UsaFlag width={35} />;
  const content = (
    <div id="conteudo-ficticio">
      <h3>CONTEUDO FICTICIO</h3>
    </div>
  );
  return (
    <div id="bodycontent">
      <div className={"transparent-bg" + classBgVisibility}></div>

      {JSON.stringify(appstate)}

      <div id="menu-wrapper">
        <AmazonMenuItem labelcomponent={labelcomponent}>
          {content}
        </AmazonMenuItem>
      </div>
    </div>
  );
}
