import "@/styles/globals.css";
import Navbar from "../components/Navigation/Navbar";
import "@/styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
  </>
);
}
