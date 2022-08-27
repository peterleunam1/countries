import { useState } from "react";
import Detail from "../components/pages/detail";

export function useNav() {
  const [isActive, setIsActive] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= "280") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  return { isActive };
}
