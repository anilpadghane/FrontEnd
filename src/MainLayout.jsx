import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Import `useLocation`
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import PopUpCard from "./component/PopUpCard";
import MiddleImg from "./component/MiddleImg";
import ItemSection from "./component/ItemSection";
import TwoImage from "./component/TwoImage";
import CarouselTwo from "./component/CarouselTwo";
import Vendor from "./component/Vendor";
import ServiceCard from "./component/ServiceCard";
import Blogg from "./component/Blogg";
import DiscoverItem from "./component/DiscoverItem";
import EmailImg from "./component/EmailImg";
import Footer from "./component/Footer";
import Home from "./component/Home"; // ✅ Import Home component

const MainLayout = () => {
  const location = useLocation(); // Get current URL
  const isHomePage = location.pathname === "/"; // Check if it's the Home Page

  return (
    <>
      {/* Header & Navbar are always visible */}
      <Header />
      <Navbar />
      <PopUpCard />

      {/* ✅ Show Home Page Components inside `<Outlet />` when at `/` */}
      {isHomePage ? (
        <>
          <Home />
          <MiddleImg />
          <ItemSection />
          <TwoImage />
          <CarouselTwo />
          <Vendor />
          <ServiceCard />
          <Blogg />
          <DiscoverItem />
          <EmailImg />
        </>
      ) : (
        <Outlet /> // ✅ Other pages will render normally
      )}

      {/* Footer is always visible */}
      <Footer />
    </>
  );
};

export default MainLayout;
