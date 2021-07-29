import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MobileHeader from "./MobileHeader/MobileHeader";
import MonitorHeader from "./MonitorHeader/MonitorHeader";

const Header = (props) => {
  let { width } = useWindowDimensions();
  let isMobile = width <= 768;

  return isMobile ? <MobileHeader /> : <MonitorHeader />;
};

export default Header;
