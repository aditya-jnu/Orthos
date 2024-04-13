import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contactus from "../components/Contactus";
import Otpbody from "../components/Otpbody";
import Logousp from "../components/Logousp";
import Faq from "../components/Faq";
import Help from "../components/Help";
import Tag from "../components/Tag";
import USP from "../components/USP";
import "../styles/Otpdefault.css";
export default function Otpdefault() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsSmallScreen(window.innerWidth < 960);
    };

    handleResize(); // Call the function to check screen size on initial render
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // *********************

  const navigate = useNavigate();
  const [logininfo, setLogininfo] = useState({ email: "" });
  const [isOpen, setisOpen] = useState(false);
  function openContactus(x) {
    setisOpen(x);
    console.log(x);
  }
  return (
    <div className="otpdefault">
      <div>
        {isSmallScreen ? (
          <div className="First_Section">
            <div style={{ marginBottom: "40px", paddingTop: "40px" }}>
              <Tag />
            </div>
            <Otpbody />
            <USP />
          </div>
        ) : (
          <div className="First_Section">
            <Logousp />
            <Otpbody />
          </div>
        )}
      </div>
      <Help openContactus={openContactus} />
      <div className={`overlay ${isOpen ? "active" : ""}`}>
        {isOpen ? (
          <div className="centered">
            <Contactus openContactus={openContactus} />{" "}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Faq />
    </div>
  );
}
