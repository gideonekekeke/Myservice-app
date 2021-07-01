import React from "react";
import "./dash.css";
import { MenuOutlined } from "@ant-design/icons";

function SideBar({ toggle, show }) {
  return (
    <>
      {show ? (
        <div
          style={{
            height: "100vh",
            width: "300px",
            backgroundColor: "#004196",

            marginTop: "-80px",
          }}
        ></div>
      ) : null}
    </>
  );
}

export default SideBar;
