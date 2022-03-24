import React from "react";

// core components
import MainNavbar from "../components/Navbars/MainNavbar";
import PageHeader from "../components/PageHeader/PageHeader.js";
import Footer from "../components/Footer/Footer.js";

// sections for this page/view
import Introduction from "../views/sections/Introduction.js";
import Examples from "../views/sections/Examples.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <MainNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Examples />
          <Introduction />
        </div>
        <Footer />
      </div>
    </>
  );
}
