import React from 'react'
import Otpinput from "../components/Otpinput";
import { Text, Flex, Link } from "@radix-ui/themes";
import "../styles/Otpdefault.css";

export default function Otpbody() {
    return (
        <div className="otp-body" style={{marginBottom:'16px'}}>
        <div className="labels" style={{ marginBottom: "24px" }}>
          <Text
            as="p"
            size="5"
            style={{
              fontFamily: "Inter",
              fontWeight: "700",
              marginBottom: "4px",
            }}
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
        <div style={{ marginBottom: "24px" }}>
          <Text
            as="p"
            size="3"
            style={{ fontFamily: "Inter", lineHeight: "24px" }}
          >
            Please check the one time code sent to:
          </Text>
          <Flex justify="between">
            <Text
              as="p"
              size="2"
              style={{
                color: "var(--Text-text-teritiary, #9BA8CD)",
                fontFamily: "Inter",
              }}
            >
              user@example.com
            </Text>
            <Text
              as="p"
              size="2"
              style={{
                color: "#A8BAEF",
                cursor: "pointer",
                fontFamily: "Inter",
              }}
            >
              Change Email
            </Text>
          </Flex>
        </div>
        <div style={{ marginBottom: "24px" }}>
          <Text
            as="p"
            size="3"
            style={{
              fontFamily: "Inter",
              color: "#C6D2F3",
              fontWeight: "500",
              lineHeight: "24px",
              marginBottom: "8px",
            }}
          >
            Enter OTP
          </Text>
          <Otpinput />
        </div>
        <Flex justify="between" style={{ marginBottom: "24px" }}>
          <Text
            as="p"
            size="2"
            style={{
              fontFamily: "Inter",
              lineHeight: "20px",
              color: "var(--Text-text-label-placeholder, #848DA6)",
            }}
          >
            Can’t find it?
          </Text>
          <Text
            as="p"
            size="2"
            style={{
              fontFamily: "Inter",
              lineHeight: "20px",
              cursor: "pointer",
              color: "var(--Text-text-link, #A8BAEF)",
            }}
          >
            Try again
          </Text>
        </Flex>
        <button
          className="btn"
          style={{
            backgroundColor: "#004CB3",
            color: "#E6EAF2",
            border: "none",
            marginBottom: "24px",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",

          }}
        >
          Proceed
        </button>
        <Text
          as="div"
          size="1"
          weight="400"
          style={{
            fontFamily: "Inter",
            lineHeight: "16px",
            textAlign: "center",
          }}
        >
          By proceeding further, I automatically accept the{" "}
          <Link
            href="#"
            target="_blank"
            style={{ color: "var(--Text-text-link, #A8BAEF)" }}
          >
            Terms & Conditions
          </Link>
        </Text>
      </div>
    )
}
