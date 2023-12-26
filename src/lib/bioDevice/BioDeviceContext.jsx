import React from 'react'
import axios from 'axios'
import { DepositFun } from '../../context/DepositContext';

const BioDeviceContext = () => {

  var readyDevices = [];

  const { deviceData, setDeviceData } = DepositFun()

  var header = {
    "Content-Type": "text/plain",
  };
  var infoHeader = {
    "Content-Type": "text/xml",
  };

  return (
    <div>

    </div>
  )
}

export default BioDeviceContext