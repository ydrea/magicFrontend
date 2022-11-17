import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </AuthProvider>
  );
}

export default MyApp;
