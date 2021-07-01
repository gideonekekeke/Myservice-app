import React, { useRef, useState } from "react";

import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

// Can be a string as well. Need to ensure each key-value pair ends with ;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function MainFile() {
  let interval = useRef();
  const hist = useHistory();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    interval = setInterval(() => {
      setLoading(!loading);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ height: "100vh", background: "#004196" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <BarLoader
              color={color}
              loading={loading}
              css={override}
              size={60}
            />
          </div>
        </div>
      ) : (
        hist.push("/read")
      )}
    </div>
  );
}
export default MainFile;
