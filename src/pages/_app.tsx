import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainContainers from "../components/main_containers";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return <MainContainers><Component {...pageProps} /><Footer/></MainContainers>;
}
