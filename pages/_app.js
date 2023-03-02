import "@/styles/globals.css";
import { wrapper } from "../src/redux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = ({ Component, pageProps }) => {
  const theme = useSelector((store) => store.themeReducer.dark_mode);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === true) {
        document.body.style.backgroundColor = "#1919704";
      } else {
        document.body.style.backgroundColor = "#fff";
      }
    }
  }, [theme]);
  useEffect(() => { 
    typeof window !== "undefined" &&
      require("../node_modules/bootstrap/dist/js/bootstrap.bundle");
  });
  return <Component {...pageProps} />;
};
export default wrapper.withRedux(App);
