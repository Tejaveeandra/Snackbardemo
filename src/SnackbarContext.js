import React, { createContext, useContext, useState } from "react";


const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("info"); 
  const [timer, setTimer] = useState(null);

  const showSnackbar = (msg, msgType = "info") => {
    setMessage(msg);
    setType(msgType);
    setVisible(true);

  
    if (timer) clearTimeout(timer);

   
    const newTimer = setTimeout(() => setVisible(false), 2000);
    setTimer(newTimer);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {visible && (
        <div className={`snackbar ${type}`}>{message}</div>
      )}
    </SnackbarContext.Provider>
  );
};
