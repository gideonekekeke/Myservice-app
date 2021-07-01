import React, { useState } from "react";
import pic from "../../Components/video/12.png";
import { useParams } from "react-router-dom";
import "./dash.css";
import { MenuOutlined } from "@ant-design/icons";
import SideBar from "../WorkerDashboard/SideBar";
import Mapstyle from "./Mapstyle";
import { app } from "../../Components/Base";
import comp from "../../Components/video/234.png";
import WarningIcon from "@material-ui/icons/Warning";
import { Button } from "antd";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useEffect } from "react";
import Location from "./Location";

const libraries = ["places"];
const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

const options = {
  styles: Mapstyle,
  disableDefaultUI: true,
  zoomControl: true,
};

const db = app.firestore().collection("Electrician");
const post = app.firestore().collection("chat");

function WorkerDashboard() {
  const { id } = useParams();
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [mess, setMess] = useState("");
  const [data, setData] = useState([]);

  const gettingData = async () => {
    await db.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      setMarkers(i);
    });
  };
  // getting the chat box
  const gettingMessage = async () => {
    await db
      .doc(id)
      .collection("chat")
      .onSnapshot((snap) => {
        const i = [];
        snap.forEach((doc) => {
          i.push(doc.data());
        });
        setData(i);
      });
  };

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

  const onMapClick = React.useCallback((e) => {
    setMarkers((marker) => [
      ...marker,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    gettingData();
    gettingMessage("my messages", data);
    console.log("gettingdata for electricians", markers);
  }, []);

  const mapRef = React.useRef();

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });
  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(!show);
  };

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  console.log(id);
  return (
    <div>
      {" "}
      <div
        style={{ height: "80px", width: "100%", backgroundColor: "#004196" }}
      >
        <div className="sidebar_holder" style={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <div style={{ height: "30px", width: "30px" }}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={pic}
              />
            </div>
            <div style={{ fontWeight: "bold", fontSize: "12px" }}>
              MYservice
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontWeight: "bold" }}>Requests</div>
            <div
              style={{
                height: "15px",
                width: "15px",
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: "50px",
                fontSize: "10px",
                marginLeft: "5px",
                marginTop: "3px",
              }}
            >
              0
            </div>
          </div>
          {/* <SideBar
            toggle={toggle}
            onClick={toggle}
            show={show}
            setShow={setShow}
          /> */}
          <div className="sidebar_menu">
            <MenuOutlined
              onClick={toggle}
              style={{
                fontSize: "17px",
              }}
            />
          </div>
        </div>
      </div>
      <GoogleMap
        marker
        zoom={8}
        mapContainerStyle={mapContainerStyle}
        center={center}
        options={options}
        value={markers}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            // onClick={() => {
            //   setSelected(marker);
            // }}
            icon={{
              // url: `/bear.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
      </GoogleMap>
      <br />
      <button
        style={{
          position: "absolute",
          top: "5rem",
          right: "1rem",
          background: "none",
          border: "none",
          zIndex: 10,
          backgroundColor: "white",
          boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
        }}
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <img
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          src={comp}
          alt="compass"
        />
        <div style={{ fontSize: "10px", fontWeight: "bold" }}>Compass</div>
      </button>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        <WarningIcon
          style={{ fontSize: "14px", marginRight: "5px", color: "red" }}
        />{" "}
        click on the compass icon to get your current location
      </p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Recent Requests
      </div>
      <br />
      <input
        value={mess}
        onChange={(e) => {
          setMess(e.target.value);
        }}
        type="text"
      />
      <Button onClick={Chatting}>Send</Button>
      <br />
      <br />
      {data.map(({ id, mess }) => (
        <div>{mess}</div>
      ))}
    </div>
  );
}

export default WorkerDashboard;
