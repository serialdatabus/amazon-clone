import React from "react";
import { /*useDispatch,*/ useSelector } from "react-redux";
import Homepage from "../Homepage/Homepage";

export default function BodyContent() {
  const appstate = useSelector((state) => state.app);
  //const dispatch = useDispatch();
  const classBgVisibility = appstate.transparentBgIsVisible ? " visible" : "";

  return (
    <div id="bodycontent">
      <div className={"transparent-bg" + classBgVisibility}></div>

      <Homepage />
    </div>
  );
}
