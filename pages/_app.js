//import components
import Footer from "@/components/modules/footer/footer";
import Navbar from "../components/modules/Navbar/navbar";
//import styles
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
