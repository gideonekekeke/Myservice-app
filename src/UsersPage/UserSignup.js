import React, { useState, useEffect } from "react";
import "./user.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from "antd";
import "antd/dist/antd.css";
import { app } from "../Components/Base";
import { Link } from "react-router-dom";
import { Input } from "antd";
import pic from "../Components/video/12.png";
import pic2 from "../Components/video/13.jfif";

import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Components/AuthState/GlobalContext";
const db = app.firestore().collection("users");
function UserSignUp() {
  const { current } = useContext(GlobalContext);
  const hist = useHistory();
  const [open, setOpen] = React.useState(true);

  const [toggle, setToggle] = useState(true);
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [location, setLocation] = useState("");
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayAvatar, setDisplayAvatar] = useState(null);
  const [displayCover, setDisplayCover] = useState(null);

  const [show, setShow] = useState(true);

  const pushtoogle = () => {
    setShow(!show);
  };

  // const id = current.uid;

  const onlick = () => {
    setToggle(!toggle);
  };

  const SignupUsers = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    db.doc(newUser.user.uid).set({
      fullname,
      phoneNumber,
      location,
      email,
      password,
    });
    setProfile("");
    setEmail("");
    setPassword("");
    setFullname("");
    setPhoneNumber("");
    hist.push("/userDashboard");
  };

  const LogInNewUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    hist.push("/userDashboard");
  };

  return (
    <div className="regNav" style={{}}>
      <div className="regNav1">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            // width: "100%",
          }}
        >
          <div className="second_box18">
            <>
              {toggle ? (
                <>
                  <div className="allReg">
                    <div className="regInput">
                      <div className="reg">SignUp</div>
                      <br />
                      <p>Please fill in all require details</p>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        size="small"
                        id="outlined-password-input"
                        type="text"
                        onChange={(e) => setFullname(e.target.value)}
                        label="Full Name"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                        style={{
                          width: "100%",
                          marginTop: "15px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="PhoneNumber"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => {
                          setLocation(e.target.value);
                        }}
                        style={{
                          width: "100%",
                          marginTop: "15px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="Location"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        style={{
                          width: "100%",
                          marginTop: "15px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="Email"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <Input.Password
                        placeholder="password"
                        style={{
                          width: "100%",
                          marginTop: "15px",
                          zIndex: 1,
                          height: "40px",
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                      {/* <p
                        style={{
                          // background: "red",
                          fontSize: "11px",
                          marginTop: "15px",
                          textAlign: "center",
                        }}
                      >
                        By proceding I am consenting to receive calls and render
                        my service to who need my help.
                      </p> */}
                      {/* <Link to={`/userDashboard/${id}`}> */}
                      <Button
                        type="primary"
                        block
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#004196",
                          color: "white",
                          width: "300px",
                        }}
                        onClick={() => {
                          SignupUsers();
                        }}
                      >
                        SignUp Now
                      </Button>
                      {/* </Link> */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "10px",
                          width: "300px",
                          // marginTop: "10px",
                          margin: "20px",
                        }}
                      >
                        <div>Already have an Account,</div>
                        <div
                          style={{
                            marginLeft: "5px",
                            color: "red",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={onlick}
                        >
                          Log In
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="allReg1">
                    <div className="regInput2">
                      <div className="reg1">Log In</div>
                      <TextField
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        style={{
                          width: "100%",
                          marginTop: "10px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="E-mail"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />

                      <Input.Password
                        placeholder="password"
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          zIndex: 1,
                          height: "40px",
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* <Link to={`/userDashboard/${id}`}> */}
                      <Button
                        type="primary"
                        block
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#004196",
                          width: "300px",
                        }}
                        onClick={() => {
                          LogInNewUser();
                        }}
                      >
                        Log In
                      </Button>
                      {/* </Link> */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "10px",
                          width: "300px",
                          margin: "10px",
                        }}
                      >
                        <div>Don't Have An Account,</div>
                        <div
                          style={{
                            marginLeft: "5px",
                            color: "red",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={onlick}
                        >
                          Sign Up
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
          <div className="first_box18">
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "150px",
                  width: "150px",
                  // backgroundColor: "white",
                  // background: " #f8f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  src={pic}
                />
              </div>

              <div
                style={{
                  textAlign: "center",
                  // fontWeight: "bold",
                  marginTop: "40px",
                  width: "80%",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                {" "}
                Create a free account now and render your services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;

// WorksignUp;
