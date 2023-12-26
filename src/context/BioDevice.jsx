// BioContext.js
import React, { createContext, useState, useContext } from 'react';

const BioDeviceContext = createContext();

export function BioDeviceProvider({ children }) {
  const [devices, setDevices] = useState([]);
  const [deviceInfo, setDeviceInfo] = useState({});
  const [status, setStatus] = useState(); // Initial status value

  return (
    <BioDeviceContext.Provider value={{ devices, setDevices, deviceInfo, setDeviceInfo, status, setStatus }}>
      {children}
    </BioDeviceContext.Provider>
  );
}

export function UseBioDeviceContext() {
  return useContext(BioDeviceContext);
}
