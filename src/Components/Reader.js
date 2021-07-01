import React from "react";
import vid from "./video/1.mp4";
import "./get.css";
import pic from "./video/45.png";
import pic2 from "./video/12.png";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Reader() {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column",
        height: "auto",
        backgroundColor: "red",
      }}
    >
      <div
        style={{ height: "50px", backgroundColor: "#004196", width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={pic2}
            />
          </div>
          <div style={{ fontWeight: "bold", fontSize: "12px", color: "white" }}>
            MYservice
          </div>
        </div>
      </div>
      <div className="the_video" style={{}}>
        <video
          autoPlay
          muted
          loop
          src={vid}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            background: "white",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          // alignItems: "center",
          backgroundColor: "#004196",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            // height: "100vh",
            margin: "10px",
          }}
        >
          <div
            style={{
              display: "flex",

              margin: "10px",
              color: "white",
            }}
          >
            Signup and get a worker account here.
          </div>{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/question"
          >
            <div className="serviceProvider" style={{}}>
              <div style={{ margin: "10px" }}>
                {" "}
                Signup As a Service Provider
              </div>
              <img style={{ height: "20px", marginRight: "20px" }} src={pic} />
            </div>
          </Link>
        </div>
        <div className="the_push">
          {" "}
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              margin: "10px",
              color: "white",
            }}
          >
            Signup and meet who you need for their service.
          </div>{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/usersignup"
          >
            <div className="serviceProvider" style={{}}>
              <div style={{ margin: "10px" }}> Signup As a Service Finder</div>
              <img style={{ height: "20px", marginRight: "20px" }} src={pic} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reader;
