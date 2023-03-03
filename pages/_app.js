import "@/styles/globals.css";
import { wrapper } from "../src/redux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { ThemeStyled } from "@/src/Styles/globalStyles";
import { Global, css } from "@emotion/react";
const App = ({ Component, pageProps }) => {
  const theme = useSelector((store) => store.themeReducer.dark_mode);



  const GlobalStyles = css`
    body {
      background-color: ${theme == true ? "#000" : "#fff"};
    }
  `;
  const themeObj = {
    mode: theme,
  };

  return (
    <ThemeProvider theme={themeObj}>
      <Global styles={GlobalStyles} />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default wrapper.withRedux(App);
