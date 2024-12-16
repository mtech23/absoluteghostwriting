import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = (props) => {
  return (
      <div id="app">
        <div className="protect-me">
          <div className="clearfix" id="fullpage">
            <Header />
            <div>{props.children}</div>
            <Footer />
          </div>
        </div>
      </div>
  );
};

export default DefaultLayout;
