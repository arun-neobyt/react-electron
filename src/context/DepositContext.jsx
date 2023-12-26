import React, { createContext, useContext, useState } from 'react';

const DepositContext = createContext();

export function DepositFun(){
  return useContext(DepositContext)
}

export function DepositProvider({ children }) {
  const [show, setShow] = useState(false)
  const [deviceData, setDeviceData] = useState()


  return (
    <DepositContext.Provider value={{ show, setShow , deviceData, setDeviceData }}>
      {children}
    </DepositContext.Provider>
  );
}
