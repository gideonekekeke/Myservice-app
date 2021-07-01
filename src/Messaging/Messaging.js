import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./report.css";
import { useHistory, useParams } from "react-router-dom";
// import { Button } from "antd";
import { CloseOutlined, WysiwygIcon } from "@ant-design/icons";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { motion } from "framer-motion";
import { MenuOutlined, IdcardOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";

import { app } from "../Components/Base";
import { useContext } from "react";
import { GlobalContext } from "../Components/AuthState/GlobalContext";

const db = app.firestore().collection("Electrician");
const dbs = app.firestore().collection("chat");
function Messaging({ id }) {
  const { current, currentData } = useContext(GlobalContext);
  // console.log(current.uid);
  // console.log("this is the normal id", id);
  // console.log("this is the normal currentuser", currentData);
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

  const [mess, setMess] = useState("");
  const [getMessage, setGetMessage] = useState([]);
  const [naming, setNaming] = useState([]);

  const Chatting = async () => {
    const ChattingUser = await app.auth().currentUser;

    if (ChattingUser) {
      await db.doc(id).collection("chat").doc().set({
        postedBy: ChattingUser.uid,
        createdUser: new Date().toLocaleString(),
        dateTime: Date.now().toString(),
        mess,
      });
      setMess("");
    }
  };

  const gettingEachMessage = async () => {
    const gotCom = await app.auth().currentUser;

    if (gotCom) {
      await db
        .doc(id)
        .collection("chat")
        .orderBy("dateTime", "asc")
        .onSnapshot((snap) => {
          const i = [];
          snap.forEach((doc) => {
            i.push({ ...doc.data(), id: doc.id });
          });
          setGetMessage(i);
        });
    }
  };

  useEffect(() => {
    gettingEachMessage();
    // console.log("current", current);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          // hist.push("/chat");
          handleOpen();
          console.log("see the id oo", id);
        }}
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
          <div initial={{ y: "100vh" }} animate={{ y: 0 }} className="thin2">
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                  marginTop: "100px",
                  flexDirection: "column",
                  // background: "red",
                  width: "350px",
                  height: "500px",
                  border: "2px solid silver",
                }}
              >
                <div>this is the chat box</div>
                <br />
                <Input
                  value={mess}
                  onChange={(e) => {
                    setMess(e.target.value);
                  }}
                  type="text"
                  placeholder="type a message..."
                  style={{ width: "300px", height: "40px" }}
                />
                <Button
                  onClick={Chatting}
                  style={{ width: "300px", height: "40px", marginTop: "10px" }}
                  type="primary"
                >
                  Send
                </Button>
                {/* <br /> */}

                <div>
                  <p>Me</p>

                  <>
                    {getMessage.map(({ id, mess }) => (
                      <div key={id}>
                        <div
                          style={{
                            backgroundColor: "#004196",
                            borderRadius: "10px",
                            fontSize: "10px",
                            height: "40px",
                            width: "150px",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "10px",
                            color: "white",
                            margin: "10px",
                            marginRight: "180px",
                          }}
                        >
                          {mess}
                        </div>
                      </div>
                    ))}
                  </>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Messaging;
