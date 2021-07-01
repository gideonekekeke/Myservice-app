import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./sid.css";
import {
  MenuOutlined,
  PlusCircleOutlined,
  ProfileOutlined,
  HomeOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";
import { GlobalContext } from "../../Components/AuthState/GlobalContext";

const SideBar = ({ isOpen, toggle }) => {
  const { currentData, current } = useContext(GlobalContext);
  // console.log(currentData);
  // console.log(current.uid);  // console.log(currentData);
  // console.log(current.uid);
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <div
          style={{ height: "100%", width: "300px", backgroundColor: "#004196" }}
        >
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <CloseIcon
              onClick={toggle}
              style={{
                marginLeft: "200px",
                marginTop: "50px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            />

            <div
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: "BOLD",
              }}
            >
              Menu
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "25px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: "60px",
                    width: "60px",
                    backgroundColor: "silver",
                    borderRadius: "50px",
                  }}
                >
                  <PlusCircleOutlined
                    style={{
                      marginTop: "40px",
                      marginLeft: "45px",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "#004196",
                      borderRadius: "50PX",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>{currentData && currentData.fullname}</div>
                  <div style={{ fontSize: "10px" }}>
                    {current && current.email}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                  marginTop: "40px",
                  width: "80%",
                  borderTop: "1px solid silver",
                }}
              >
                <HomeOutlined style={{ fontSize: "17px", margin: "10px" }} />
                <div
                  style={{
                    marginRight: "50px",
                    fontSize: "17px",
                    margin: "10px",
                  }}
                >
                  Dashboard
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                  // marginTop: "20px",
                  width: "80%",
                  // borderTop: "1px solid silver",
                }}
              >
                <ProfileOutlined style={{ fontSize: "17px", margin: "10px" }} />
                <div
                  style={{
                    marginRight: "60px",
                    fontSize: "17px",
                    margin: "10px",
                  }}
                >
                  Profile
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                  // marginTop: "20px",
                  width: "80%",
                  // borderTop: "1px solid silver",
                }}
              >
                <SettingOutlined style={{ fontSize: "17px", margin: "10px" }} />
                <div
                  style={{
                    marginRight: "60px",
                    fontSize: "17px",
                    margin: "10px",
                  }}
                >
                  Settings
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                  // marginTop: "20px",
                  width: "80%",
                  // borderBottom: "1px solid silver",
                }}
              >
                <PoweroffOutlined
                  style={{ fontSize: "17px", margin: "10px" }}
                />
                <div
                  style={{
                    marginRight: "60px",
                    fontSize: "17px",
                    margin: "10px",
                  }}
                >
                  LogOut
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
