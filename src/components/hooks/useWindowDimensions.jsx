import { useEffect } from "react";
import { useState } from "react";

const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerHeight, innerWidth } = global;
    return {
      height: innerHeight,
      width: innerWidth,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    global.addEventListener("resize", handleResize);
    return () => global.removeEventListener("resize", handleResize);
  });

  return windowDimensions;
};

export default useWindowDimensions;
