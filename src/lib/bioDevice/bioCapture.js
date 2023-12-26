import axios from "axios";

var readyDevices = [];
var deviceInfo = [];
var errorCount = 0;
var header = {
  "Content-Type": "text/plain",
};
var infoHeader = {
  "Content-Type": "text/xml",
};

// common variables
let cpath;
let ipath;
let deviceSrNo;
let sysId;
let deviceModel;
let deviceName;

let fType = 2;
let bioenv = "PP";



// port discovery function  invoke RD services API
export function discoverPort() {
  for (let i = 11100; i <= 11120; i++) {
    // let url = "http://localhost:" + i;
    console.log(i);

    // let api = apiCaller("RDSERVICE",url, header , "xml");
    rdservice("http://localhost:" + i);
    // console.log(api);

    if ((readyDevices.length > 0 && errorCount > 1) || errorCount > 7) {
      break;
    }
    // return;
  }

  if (readyDevices.length === 0) {
    console.log("Unable to detect any registered bio-metric device!");
  } else if (readyDevices.length > 1) {
    console.log("Multiple devices detected! Please use only one device.");
  } else {
    console.log();
  }
}

// fetch rd services information
async function rdservice(url) {


  header = {
    "Content-Type": "text/plain",
  };
  var result = await apiCaller("RDSERVICE", url, header, "xml");

  // console.log("rd service res --- " + result.data);

  var xmlDat = xmlToString(result.data);

  var status = xmlDat
    .getElementsByTagName("RDService")[0]
    .getAttribute("status");
  console.log("Status: " + status);

  


  

  if (status === "READY") {
    var info = xmlDat.getElementsByTagName("RDService")[0].getAttribute("info");
    // console.log("info --- " + info);

    if (cpath === null || cpath === undefined) {
      return null;
    } else {
      cpath = xmlDat.getElementsByTagName("Interface")[0].getAttribute("path");
      console.log("cpath --- " + cpath);
    }

    if (ipath === null || ipath === undefined) {
      return null;
    } else {
      ipath = xmlDat.getElementsByTagName("Interface")[1].getAttribute("path");
      console.log("ipath --- " + ipath);
    }

    readyDevices.push({ url: url, path: cpath, info: info, ipath: ipath });

    var infoUrl = url + ipath;
    console.log("info url --- " + infoUrl);
    fetchDeviceInfo(infoUrl);
  }

  return null;
}

//  fetch the device infoirmation - invoke DEVICEINFO api
async function fetchDeviceInfo(infoUrl) {
  let result = await apiCaller("DEVICEINFO", infoUrl, infoHeader, "xml");
  var res = result.data;
  console.log("info res --- " + res);

  var xmlDat = xmlToString(res);

  if (deviceName === null || deviceName === undefined) {
    return null;
  } else {
    deviceName = xmlDat
      .getElementsByTagName("DeviceInfo")[0]
      .getAttribute("dpId");
    console.log("info --- rs - " + deviceName);
  }

  if (deviceModel === null || deviceModel === undefined) {
    return null;
  } else {
    deviceModel = xmlDat
      .getElementsByTagName("DeviceInfo")[0]
      .getAttribute("mi");
    console.log("device model --- " + deviceModel);
  }

  if (deviceSrNo === null || deviceSrNo === undefined) {
    return null;
  } else {
    deviceSrNo = xmlDat.getElementsByTagName("Param")[0].getAttribute("value");
    console.log("device SrNo. " + deviceSrNo);
  }

  if (sysId === null || sysId === undefined) {
    return null;
  } else {
    sysId = xmlDat.getElementsByTagName("Param")[1].getAttribute("value");
    console.log("device sysId " + sysId);
  }

  deviceInfo.push({
    deviceName: deviceName,
    deviceModel: deviceModel,
    deviceSrNo: deviceSrNo,
    sysId: sysId,
  });

  // pidReq(deviceModel)

  return;
}

// capture method -   invoke CAPTURE api
// pass the pid option xml, url, data, path, deviceModel, ,
export function bioCapture() {
  if (readyDevices.length != 1) {
    discoverPort();
    if (readyDevices.length != 1) {
      return false;
    }
  }
  let readyDev = readyDevices[0];
  let path = readyDev.path;
  let url = readyDev.url;
  let curl = url + path;

  captureFPAuth(curl);
}

// capture finger print

function captureFPAuth(curl) {
  capJson(curl, function (err, data) {
    if (err != null) {
      console.log("Something went wrong: " + err);
    } else {
      let pidXml = data;
      console.log("pidxml --- " + pidXml);
    }
  });
}

function pidReq(deviceModel) {
  if (deviceModel === "MIS100V2") {
    pidReq =
      '<PidOptions> <Opts fCount="0" fType="' +
      fType +
      '" iCount="1" pCount="0" format="0" pidVer="2.0" timeout="20000" otp="" posh="UNKNOWN" env="' +
      bioenv +
      '" wadh="" /> <Demo></Demo> <CustOpts> <Param name="ValidationKey" value="" /> </CustOpts> </PidOptions>';
  } else {
    pidReq =
      '<PidOptions> <Opts fCount="1" fType="' +
      fType +
      '" iCount="1" pCount="0" format="0" pidVer="2.0" timeout="20000" otp="" posh="UNKNOWN" env="' +
      bioenv +
      '" wadh="" /> <Demo></Demo> <CustOpts> <Param name="ValidationKey" value="" /> </CustOpts> </PidOptions>';
  }
}

async function capJson(curl, callback) {
  let InputXml = pidReq;

  var result = await apiCaller("CAPTURE", curl, infoHeader, InputXml, "xml");
  var res = result.data;
  callback(res);
  console.log("res --- " + res);
  return res;
}

//  axios invoker
// pass url, method and payload , returns res object
async function apiCaller(method, url, header, data, responseType) {
  return await axios({
    method: method,
    url: url,
    headers: header,
    data: data,
    responseType: responseType,
  })
    .then(function (response) {
      if (!response) {
        return null;
      } else {
        // console.log("response --- " + JSON.stringify(response));
        return response;
      }
    })
    .catch(function (error) {
      //   errCode = "";
      return null;
    });
}

// xml parser method - inputs xml and returns string
function xmlToString(res) {
  var parser = new DOMParser();
  var xmlDat = parser.parseFromString(res, "text/xml");
  // console.log("xml to " + xmlDat)
  return xmlDat;
}
