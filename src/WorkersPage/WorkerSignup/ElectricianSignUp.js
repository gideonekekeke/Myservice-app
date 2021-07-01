import React, { useState, useEffect } from "react";
import "./work.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from "antd";
import "antd/dist/antd.css";
import { app } from "../../Components/Base";

import { Link } from "react-router-dom";
import { Input } from "antd";
import pic from "../../Components/video/12.png";
import pic2 from "../../Components/video/13.jfif";

import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Components/AuthState/GlobalContext";
const db = app.firestore().collection("Electrician");

function ElectricianSignUp() {
  const { current } = useContext(GlobalContext);
  const hist = useHistory();

  const [toggle, setToggle] = useState(true);
  const [fullname, setfullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [displayAvatar, setDisplayAvatar] = useState(null);

  const [show, setShow] = useState(true);

  const pushtoogle = () => {
    setShow(!show);
  };

  const id = current.uid;
  console.log(id);
  const onlick = () => {
    setToggle(!toggle);
  };
  // displaying the upload image
  const onDisplayAvatar = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setDisplayAvatar(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const ImageUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = await storageRef.child(file.name);
    await fileRef.put(file);
    setProfile(await fileRef.getDownloadURL());
  };

  const putting = (e) => {
    onDisplayAvatar(e);
    ImageUpload(e);
  };

  const SignupElectrician = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    db.doc(newUser.user.uid).set({
      fullname,
      phoneNumber,
      avatar: await profile,
      email,
      password,
      location,
    });
    setProfile("");
    setEmail("");
    setPassword("");
    setfullname("");
    setPhoneNumber("");
    setLocation("");
  };

  const LogInNewUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    // hist.push("/workerdashboard");
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
          <div className="second_box22">
            <>
              {toggle ? (
                <>
                  <div className="allReg">
                    <div className="regInput">
                      <div className="reg">SignUp</div>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        size="small"
                        id="outlined-password-input"
                        type="text"
                        onChange={(e) => setfullname(e.target.value)}
                        label="Full Name"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        style={{
                          width: "100%",
                          marginTop: "10px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="PhoneNumber"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <TextField
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={{
                          width: "100%",
                          marginTop: "10px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="Address"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <br />
                      {displayAvatar ? (
                        <div
                          style={{
                            height: "100px",
                            width: "200px",
                            // backgroundColor: "silver",
                          }}
                        >
                          <img
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                            }}
                            src={displayAvatar}
                          />
                        </div>
                      ) : (
                        <div
                          style={{
                            height: "100px",
                            width: "200px",
                            // backgroundColor: "silver",
                          }}
                        >
                          <img
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                            }}
                            src={pic2}
                          />
                        </div>
                      )}
                      <div class="file-input">
                        <input
                          value={ImageUpload}
                          onChange={putting}
                          type="file"
                          id="file"
                          className="file"
                        />
                        <label for="file"> Take Photo</label>
                      </div>
                      <TextField
                        style={{
                          width: "100%",
                          marginTop: "10px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="E-mail"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
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
                      />{" "}
                      <p
                        style={{
                          // background: "red",
                          fontSize: "11px",
                          marginTop: "10px",
                          textAlign: "center",
                        }}
                      >
                        By proceding I am consenting to receive calls and render
                        my service to who need my help.
                      </p>
                      <Link to={`workerdashboard/${id}`}>
                        <Button
                          // type="primary"
                          block
                          style={{
                            // marginTop: "10px",
                            backgroundColor: "#004196",
                            color: "white",
                          }}
                          onClick={() => {
                            SignupElectrician();
                          }}
                        >
                          SignUp Now
                        </Button>
                      </Link>
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
                      <Link to={`workerdashboard/${id}`}>
                        <Button
                          type="primary"
                          block
                          style={{
                            marginTop: "10px",
                            backgroundColor: "#004196",
                          }}
                          onClick={() => {
                            LogInNewUser();
                          }}
                        >
                          Log In
                        </Button>
                      </Link>
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
          <div className="first_box22">
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

export default ElectricianSignUp;

// ElectricianSignUp
