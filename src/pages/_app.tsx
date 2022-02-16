import { Provider } from "urql";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { client, ssrCache } from "../lib/urql";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default App;
