import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./report.css";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "antd";
import { CloseOutlined, WysiwygIcon } from "@ant-design/icons";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { app } from "../Base";
import { motion } from "framer-motion";
import { MenuOutlined, IdcardOutlined } from "@ant-design/icons";
import Contacting from "./Contacting";
// const db = app.firestore({ getData }).collection("Electrician");
function SearchingPainter({ fullname, avatar, email, handleCancel }) {
  return (
    <>
      <div
        style={{
          width: "300px",
          // height: "150px",
          boxShadow: "0px 5px 7px -2px rgba(0, 0, 0, 0.35)",
          // marginTop: "30px",
          margin: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50px",
                backgroundColor: "silver",
              }}
            >
              <img
                src={avatar}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
              />
            </div>
            <div
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "column",
                // background: "red",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <div style={{ marginTop: "10px" }}>{fullname}</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon
                  style={{ fontSize: "15px", marginTop: "10px" }}
                />
                <div style={{ fontSize: "10px", marginTop: "10px" }}>
                  {email}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <IdcardOutlined />
                <div style={{ fontSize: "12px", marginLeft: "5px" }}>
                  {" "}
                  Painter
                </div>
              </div>
            </div>
          </div>
          <p style={{ width: "100%", marginLeft: "10px" }}>
            worked with Olam electrical company as their senior electrical
            engineer...{" "}
          </p>
          <Contacting />
        </div>
      </div>
    </>
  );
}

export default SearchingPainter;
