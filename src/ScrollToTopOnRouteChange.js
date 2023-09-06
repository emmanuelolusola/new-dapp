import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate;
    return () => {
      //unlisten();
    };
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return null;
};

export default ScrollToTopOnRouteChange;
