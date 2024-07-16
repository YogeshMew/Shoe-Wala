import React from "react";
import { createRoot } from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { IMG_CDN_URL } from "./config";
import Footer from "./components/Footer";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
