import React, { useEffect, useState, createContext } from "react";
import { app } from "../Base";

const db = app.firestore().collection("users");
const dbs = app.firestore().collection("Electrician");

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [current, setCurrent] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user);

      db.doc(user.uid)
        .get()
        .then((doc) => {
          setCurrentData(doc.data());
        });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        current,
        currentData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
