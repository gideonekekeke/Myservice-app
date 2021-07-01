import React, { useState, useEffect } from "react";
import pic from "../Components/video/12.png";
import "./dash.css";
import { MenuOutlined } from "@ant-design/icons";
import SideBar from "./SideBar/SideBar";
import Mapstyle from "./Mapstyle";
import WarningIcon from "@material-ui/icons/Warning";
import comp from "../Components/video/234.png";
import TextField from "@material-ui/core/TextField";
import { Button } from "antd";
import { app } from "../Components/Base";
import { CloseOutlined, WysiwygIcon } from "@ant-design/icons";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { IdcardOutlined } from "@ant-design/icons";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";

import NavBar from "./NavBar";

import { useContext } from "react";
import { GlobalContext } from "../Components/AuthState/GlobalContext";
import SearchingElectrician from "../Components/Searching/Searching";
import Contacting from "../Components/Searching/Contacting";
import { useHistory } from "react-router-dom";
import SearchingPainter from "../Components/Searching/SearchingPainter";
import SearchingPlumber from "../Components/Searching/SearchingPlumber";
import SearchingCarpenter from "../Components/Searching/SearchingCarpenter";
import SearchingTailor from "../Components/Searching/SearchingTailor";
import SearchingSales from "../Components/Searching/SearchingSales";
import SearchingOthers from "../Components/Searching/SearchingOthers";
// import Location from "./Location";

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
function UserDashboard() {
  const randomData = Math.floor(Math.random() * db);
  const hist = useHistory();
  const { current, currentData } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [electrician, setElectrician] = useState([]);
  const [plumber, setPlumber] = useState([]);
  const [painter, setPainter] = useState([]);
  const [carpenter, setCarpenter] = useState([]);
  const [tailor, setTailor] = useState([]);
  const [sales, setSales] = useState([]);
  const [welder, setWelder] = useState([]);

  const [showElectrician, setShowElectrician] = useState(false);
  const [showPlumber, setShowPlumber] = useState(false);
  const [showPainter, setShowPainter] = useState(false);
  const [showCarpenter, setShowCarpenter] = useState(false);
  const [showTailor, setShowTailor] = useState(false);
  const [showSales, setShowSales] = useState(false);
  const [showWelder, setShowWelder] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleElectrician = () => {
    setShowElectrician(true);
    setShowSales(false);
    setShowCarpenter(false);
    setShowPlumber(false);
    setShowTailor(false);
    setShowWelder(false);
    setShowPainter(false);
  };
  const handleCancel = () => {
    setShowElectrician(false);
    setShowSales(false);
    setShowCarpenter(false);
    setShowPlumber(false);
    setShowTailor(false);
    setShowWelder(false);
    setShowPainter(false);
  };
  const handlePlumber = () => {
    setShowElectrician(false);
    setShowSales(false);
    setShowCarpenter(false);
    setShowPlumber(true);
    setShowTailor(false);
    setShowWelder(false);
    setShowPainter(false);
  };
  const handlePainter = () => {
    setShowElectrician(false);
    setShowSales(false);
    setShowCarpenter(false);
    setShowPlumber(false);
    setShowTailor(false);
    setShowWelder(false);
    setShowPainter(true);
  };
  const handleTailor = () => {
    setShowElectrician(false);
    setShowSales(false);
    setShowCarpenter(false);
    setShowPlumber(false);
    setShowTailor(true);
    setShowWelder(false);
    setShowPainter(false);
  };
  const handleSales = () => {
    setShowElectrician(false);
    setShowSales(true);
    setShowCarpenter(false);
    setShowPlumber(false);
    setShowTailor(false);
    setShowWelder(false);
    setShowPainter(false);
  };
  const handleCarpenter = () => {
    setShowElectrician(false);
    setShowSales(false);
    setShowCarpenter(true);
    setShowPlumber(false);
    setShowTailor(false);
    setShowWelder(false);
    setShowPainter(false);
  };
  const handleWelder = () => {
    setShowElectrician(false);
    setShowSales(false);
    setShowCarpenter(false);
    setShowPlumber(false);
    setShowTailor(false);
    setShowWelder(true);
    setShowPainter(false);
  };

  const getElectrician = async () => {
    await db.onSnapshot((snapshot) => {
      const temp = [];
      snapshot.forEach((doc) => {
        temp.push({ ...doc.data(), id: doc.id });
      });
      setElectrician(temp);
    });
  };
  const getPlumber = async () => {
    await app
      .firestore()
      .collection("Plumber")
      .onSnapshot((snapshot) => {
        const temp = [];
        snapshot.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        setPlumber(temp);
      });
  };
  const getPainter = async () => {
    await app
      .firestore()
      .collection("Painter")

      .onSnapshot((snapshot) => {
        const temp = [];
        snapshot.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        setPainter(temp);
      });
  };
  const getCarpenter = async () => {
    await app
      .firestore()
      .collection("Carpenter")

      .onSnapshot((snapshot) => {
        const temp = [];
        snapshot.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        setCarpenter(temp);
      });
  };
  const getTailor = async () => {
    await app
      .firestore()
      .collection("Fashiondesigner")

      .onSnapshot((snapshot) => {
        const temp = [];
        snapshot.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        setTailor(temp);
      });
  };
  const getSales = async () => {
    await app
      .firestore()
      .collection("Sales")

      .onSnapshot((snapshot) => {
        const temp = [];
        snapshot.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        setSales(temp);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getWelder = async () => {
    await app
      .firestore()
      .collection("Welder")

      .onSnapshot((snapshot) => {
        const temp = [];
        snapshot.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        setWelder(temp);
      });
  };

  React.useEffect(() => {
    getElectrician();
    getPlumber();
    getPainter();
    getCarpenter();
    getTailor();
    getSales();
    getWelder();
    console.log(electrician);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [selectedModal, setSelectedModal] = React.useState(true);

  const theChange = () => {
    setSelectedModal(!selectedModal);
  };
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(false);

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

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />

      <GoogleMap
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
            onClick={() => {
              setSelected(marker);
            }}
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
          alignItems: "center",
        }}
      >
        <WarningIcon
          style={{ fontSize: "14px", marginRight: "5px", color: "red" }}
        />{" "}
        click on the compass icon to get your current location
      </p>
      <br />
      <div className="the_searchtext" style={{}}>
        Make a search on who you are looking for.
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <TextField
          // onClick={handleElectrician}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "330px",
          }}
          // id="outlined-select-currency-native"
          select
          label="Search"
          variant="outlined"
        >
          <option
            onClick={handleElectrician}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            Electrician{" "}
          </option>
          <option
            onClick={handlePlumber}
            style={{ marginLeft: "10px", cursor: "pointer" }}
            value="Plumber"
          >
            {" "}
            Plumber
          </option>
          <option
            onClick={handleCarpenter}
            style={{ marginLeft: "10px", cursor: "pointer" }}
            value="Carpenter"
          >
            {" "}
            Carpenter{" "}
          </option>
          <option
            onClick={handleTailor}
            style={{ marginLeft: "10px", cursor: "pointer" }}
            value="      FashionDesigner"
          >
            {" "}
            FashionDesigner{" "}
          </option>
          <option
            onClick={handlePainter}
            style={{ marginLeft: "10px", cursor: "pointer" }}
            value="Painter"
          >
            {" "}
            Painter{" "}
          </option>
          <option
            onClick={handleWelder}
            style={{ marginLeft: "10px", cursor: "pointer" }}
            value="Welder"
          >
            {" "}
            Welder{" "}
          </option>
          <option
            onClick={handleSales}
            style={{ marginLeft: "10px", cursor: "pointer" }}
            value="Sales"
          >
            {" "}
            Sales Boy/Girl{" "}
          </option>
        </TextField>
        {showElectrician ? (
          <>
            <div className="backdrop">
              <div className="thin2">
                <div
                  style={{
                    // background: "red",
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "20PX",
                  }}
                >
                  <CloseOutlined
                    // onClick={theChange}
                    onClick={handleCancel}
                    style={{
                      width: "90%",
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "20px",
                      // marginTop: "-50px",
                      cursor: "pointer",
                      position: "sticky",
                      top: 20,
                      zIndex: 10,
                    }}
                  />
                  {electrician.map(
                    ({
                      id,
                      fullname,
                      avatar,
                      email,
                      location,
                      phoneNumber,
                    }) => (
                      <>
                        <SearchingElectrician
                          handleCancel={handleCancel}
                          key={id}
                          avatar={avatar}
                          email={email}
                          fullname={fullname}
                          location={location}
                          phoneNumber={phoneNumber}
                          id={id}
                        />
                      </>
                    )
                  )}
                </div>
              </div>
            </div>
          </>
        ) : showPainter ? (
          <>
            <div className="backdrop">
              <div className="thin2">
                <div
                  style={{
                    // background: "red",
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "20PX",
                  }}
                >
                  <CloseOutlined
                    // onClick={theChange}
                    onClick={handleCancel}
                    style={{
                      width: "90%",
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "20px",
                      // marginTop: "-50px",
                      cursor: "pointer",
                      position: "sticky",
                      top: 20,
                      zIndex: 10,
                    }}
                  />
                  {painter.map(({ id, fullname, email, avatar, location }) => (
                    <SearchingPainter
                      handleCancel={handleCancel}
                      key={id}
                      avatar={avatar}
                      email={email}
                      fullname={fullname}
                      location={location}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : showPlumber ? (
          <>
            <div className="backdrop">
              <div className="thin2">
                <div
                  style={{
                    // background: "red",
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "20PX",
                  }}
                >
                  <CloseOutlined
                    // onClick={theChange}
                    onClick={handleCancel}
                    style={{
                      width: "90%",
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "20px",
                      // marginTop: "-50px",
                      cursor: "pointer",
                      position: "sticky",
                      top: 20,
                      zIndex: 10,
                    }}
                  />
                  {plumber.map(({ id, email, avatar, fullname, location }) => (
                    <SearchingPlumber
                      handleCancel={handleCancel}
                      key={id}
                      avatar={avatar}
                      email={email}
                      fullname={fullname}
                      location={location}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : showCarpenter ? (
          <>
            <div className="backdrop">
              <div className="thin2">
                <div
                  style={{
                    // background: "red",
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "20PX",
                  }}
                >
                  <CloseOutlined
                    // onClick={theChange}
                    onClick={handleCancel}
                    style={{
                      width: "90%",
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "20px",
                      // marginTop: "-50px",
                      cursor: "pointer",
                      position: "sticky",
                      top: 20,
                      zIndex: 10,
                    }}
                  />
                  {carpenter.map(
                    ({ id, email, avatar, fullname, location }) => (
                      <SearchingCarpenter
                        handleCancel={handleCancel}
                        key={id}
                        avatar={avatar}
                        email={email}
                        fullname={fullname}
                        location={location}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </>
        ) : showTailor ? (
          <>
            <div className="backdrop">
              <div className="thin2">
                <div
                  style={{
                    // background: "red",
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "20PX",
                  }}
                >
                  <CloseOutlined
                    // onClick={theChange}
                    onClick={handleCancel}
                    style={{
                      width: "90%",
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "20px",
                      // marginTop: "-50px",
                      cursor: "pointer",
                      position: "sticky",
                      top: 20,
                      zIndex: 10,
                    }}
                  />
                  {tailor.map(({ id, email, avatar, fullname, location }) => (
                    <SearchingTailor
                      handleCancel={handleCancel}
                      key={id}
                      avatar={avatar}
                      email={email}
                      fullname={fullname}
                      location={location}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : showSales ? (
          <>
            <div className="backdrop">
              <div className="thin2">
                <div
                  style={{
                    // background: "red",
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "20PX",
                  }}
                >
                  <CloseOutlined
                    // onClick={theChange}
                    onClick={handleCancel}
                    style={{
                      width: "90%",
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "20px",
                      // marginTop: "-50px",
                      cursor: "pointer",
                      position: "sticky",
                      top: 20,
                      zIndex: 10,
                    }}
                  />
                  {sales.map(({ id, fullname, email, avatar, location }) => (
                    <SearchingSales
                      handleCancel={handleCancel}
                      key={id}
                      avatar={avatar}
                      email={email}
                      fullname={fullname}
                      location={location}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : showWelder ? (
          <>
            <div className="backdrop">
              <div className="thin2">
                <div
                  style={{
                    // background: "red",
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingTop: "20PX",
                  }}
                >
                  <CloseOutlined
                    // onClick={theChange}
                    onClick={handleCancel}
                    style={{
                      width: "90%",
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "20px",
                      // marginTop: "-50px",
                      cursor: "pointer",
                      position: "sticky",
                      top: 20,
                      zIndex: 10,
                    }}
                  />
                  {welder.map(({ id, fullname, email, avatar, location }) => (
                    <SearchingOthers
                      handleCancel={handleCancel}
                      key={id}
                      avatar={avatar}
                      email={email}
                      fullname={fullname}
                      location={location}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div>{currentData && currentData.name}</div>

      <div className="search">
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search location"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </div>
  );
}

export default UserDashboard;
