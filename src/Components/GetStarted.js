import React, { useRef } from "react";
import "./get.css";
import { Button } from "antd";
import "antd/dist/antd.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#004196",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          heigth: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <div className="the_welcome">Welcome to</div>

        <div className="the_service">MYservice</div>

        <div className="the_call">Get called or call who need your service</div>
        <Link to="/load">
          <Button
            style={{
              width: "200px",
              height: "50px",
              marginTop: "10px",
              backgroundColor: "#D3D3D3",
              color: "black",
              borderRadius: "5px",
              fontSize: "17px",
            }}
            type="primary"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
