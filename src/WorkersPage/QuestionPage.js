import React from "react";
import "./ques.css";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
function QuestionPage() {
  const hist = useHistory();
  return (
    <div className="theBackground">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="question_text">
          What's Your Occupation?{" "}
          <CloseOutlined
            onClick={() => {
              hist.push("/read");
            }}
            style={{ fontSize: "13px", marginLeft: "30px", cursor: "pinter" }}
          />
        </div>
        <div className="big_box" style={{}}>
          <Link to="/electrician">
            <Button
              style={{
                height: "60px",
                width: "230px",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "10PX",
                backgroundColor: "#D3D3D3",
                borderRadius: "5px",
              }}
            >
              Electrician
            </Button>
          </Link>
          <Link to="/plumber">
            <Button
              style={{
                height: "60px",
                width: "230px",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "10PX",
                backgroundColor: "#D3D3D3",
                borderRadius: "5px",
              }}
            >
              Plumber
            </Button>
          </Link>
          <Link to="/carpenter">
            <Button
              style={{
                height: "60px",
                width: "230px",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "10PX",
                backgroundColor: "#D3D3D3",
                borderRadius: "5px",
              }}
            >
              Carpenter
            </Button>
          </Link>
          <Link to="/fashiondesigner">
            <Button
              style={{
                height: "60px",
                width: "230px",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "10PX",
                backgroundColor: "#D3D3D3",
                borderRadius: "5px",
              }}
            >
              Fashion Designer
            </Button>
          </Link>
          <Link to="/painter">
            <Button
              style={{
                height: "60px",
                width: "230px",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "10PX",
                backgroundColor: "#D3D3D3",
                borderRadius: "5px",
              }}
            >
              Painter
            </Button>
          </Link>
          <Link to="/welder">
            <Button
              style={{
                height: "60px",
                width: "230px",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "10PX",
                backgroundColor: "#D3D3D3",
                borderRadius: "5px",
              }}
            >
              Welder
            </Button>
          </Link>
          <Link to="/sales">
            <Button
              style={{
                height: "60px",
                width: "230px",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "10PX",
                backgroundColor: "#D3D3D3",
                borderRadius: "5px",
              }}
            >
              Sales Boy/Girl
            </Button>
          </Link>
          <Link to="/others">
            <Button
              style={{
                height: "60px",
                width: "230px",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "10PX",
                backgroundColor: "#D3D3D3",
                borderRadius: "5px",
              }}
            >
              Others
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
