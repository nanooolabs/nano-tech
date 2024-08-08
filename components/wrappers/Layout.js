import React from "react";
import Header from "@/components/blocks/header/Header01";
import Footer from "@/components/blocks/footer/Footer01";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
