import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Text } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Logindefault.css";
export default function Loginbody() {
    const [logininfo, setLogininfo] = useState({ email: "" });
    const navigate = useNavigate();
    function changeHandler(event) {
        setLogininfo((prevState) => {
          return {
            ...prevState,
            [event.target.name]: event.target.value,
          };
        });
      }
      function submitHandler(event) {
        event.preventDefault();
        console.log("Login Done");
        console.log(logininfo);
        navigate("/orthos/otp");
      }
    return (
        <div className="login-body">
              <div className="Login-Card">
                <div className="labels" style={{ marginBottom: "1rem" }}>
                  <Text
                    as="p"
                    size="5"
                    weight="bold"
                    style={{ fontFamily: "Inter" }}
                  >
                    Start Changing the World
                  </Text>
                  <Text
                    as="p"
                    size="2"
                    weight="light"
                    style={{ color: "#C6D2F3", fontFamily: "Inter" }}
                  >
                    Log in to enter Orthos.id
                  </Text>
                </div>
                <form
                  onSubmit={submitHandler}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label
                      htmlFor="email"
                      style={{
                        marginBottom: "0.5rem",
                        fontWeight: "Bold",
                        fontFamily: "Inter",
                        fontSize: "16px",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="ip"
                      style={{
                        padding: "0.35rem",
                        borderRadius: "0.25rem",
                        border: "none",
                        backgroundColor: "#0F141B",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "24px",
                        fontSize: "16px",
                        color: "white",
                      }}
                      onChange={changeHandler}
                      name="email"
                      value={logininfo.email}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#004CB3",
                      color: "white",
                      border: "none",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      height: "40px",
                    }}
                  >
                    Proceed
                  </button>
                </form>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "16px",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    borderBottom: "1px solid #1C2A45 ",
                    height: "1px",
                    backgroundColor: "black",
                    flex: "1",
                    background: "var(--Blue-Gray-blue-gray-12, #1C2A45)",
                  }}
                ></div>
                <span>or</span>
                <div
                  style={{
                    borderBottom: "1px solid #1C2A45 ",
                    height: "1px",
                    backgroundColor: "black",
                    flex: "1",
                    background: "var(--Blue-Gray-blue-gray-12, #1C2A45)",
                  }}
                ></div>
              </div>
              <button
                className="btn"
                style={{
                  backgroundColor: "#131924",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                  height: "40px",
                  marginBottom:'16px'
                }}
              >
                <FcGoogle style={{ fontSize: "1rem" }} />
                <p>Continue with Google</p>
              </button>
            </div>
    )
}
