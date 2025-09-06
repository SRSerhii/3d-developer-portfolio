import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    let tries = 0;
    const maxTries = 20;

    const scrollIfFound = () => {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (tries < maxTries) {
        tries++;
        setTimeout(scrollIfFound, 10);
      }
    };

    scrollIfFound();
  }, [location]);

  return null;
}