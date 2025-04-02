import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container ptb-10 flex">
          <div className="logo flex">
            <img src="./assets/img/ONESEA-logo.svg" alt="" />
            <i>Intranet Portal</i>
          </div>
          <Nav />
        </div>
      </header>
    </div>
  );
}
