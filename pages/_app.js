import '@/styles/globals.css'
import {wrapper} from "../src/redux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


const App=({ Component, pageProps })=> {

  return (
      <Component {...pageProps} />
  );
}
export default wrapper.withRedux(App)