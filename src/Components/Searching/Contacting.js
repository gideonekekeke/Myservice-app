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

import { motion } from "framer-motion";
import { MenuOutlined, IdcardOutlined } from "@ant-design/icons";

function Contacting() {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100%",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,

      // border: "2px solid #000",
      // backgroundImage: "linear-gradient(#4c87df, #1854b1, #2233ac)",
      backgroundColor: "white",
      // color: "white",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "60%",

      display: "flex",
      // alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={handleOpen}
        style={{
          // marginTop: "5px",
          height: "50px",
          // width: "150px",
          borderRadius: "5px",
          backgroundColor: "#004196",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginLeft: "70px",
          margin: "5px",
          // marginLeft: "70px",
        }}
      >
        Contact
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            className="thin2"
          >
            <div
              style={{
                // background: "red",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CloseOutlined
                style={{
                  width: "90%",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "20px",
                  // marginTop: "-50px",
                  cursor: "pointer",
                }}
              />
              <div
                style={{
                  width: "300px",
                  // height: "150px",
                  boxShadow: "0px 5px 7px -2px rgba(0, 0, 0, 0.35)",
                  // marginTop: "30px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        height: "60px",
                        width: "60px",
                        borderRadius: "50px",
                        backgroundColor: "silver",
                      }}
                    ></div>
                    <div
                      style={{
                        // marginLeft: "10px",
                        fontWeight: "bold",
                        display: "flex",
                        flexDirection: "column",
                        // background: "red",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginTop: "10px" }}>Chukwuemeka Ebuka</div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <LocationOnIcon
                          style={{ fontSize: "15px", marginTop: "10px" }}
                        />
                        <div style={{ fontSize: "10px", marginTop: "10px" }}>
                          29, Adetola lane off people's Bus stop
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
                          Chukwuemekaebuka234@gmail.com
                        </div>
                      </div>
                      <div>
                        <Button
                          style={{
                            marginTop: "5px",
                            height: "50px",
                            width: "150px",
                            borderRadius: "5px",
                            backgroundColor: "#004196",
                            color: "white",
                          }}
                        >
                          Chat
                        </Button>
                        <Button
                          style={{
                            marginTop: "5px",
                            height: "50px",
                            width: "150px",
                            borderRadius: "5px",
                            backgroundColor: "red",
                            color: "white",
                          }}
                        >
                          Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Fade>
      </Modal>
    </>
  );
}

export default Contacting;
