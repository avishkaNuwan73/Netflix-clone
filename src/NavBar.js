import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, [show]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://media.netflix.com/static/images/Netflix-Logo.svg"
        alt="netflix-logo"
        className="netflix__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avata-logo"
        className="netflix__avata__logo"
      />
    </div>
  );
}

export default NavBar;
