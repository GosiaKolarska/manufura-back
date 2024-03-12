import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "../CTA/CTA";
import Map from "../Map/map";
import Socials from "../Socials/Socials";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Socials />
      <main>{children}</main>
      <CTA />
      <Map />
      <Footer />
    </>
  );
};

export default Layout;
