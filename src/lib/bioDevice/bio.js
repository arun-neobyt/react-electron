import axios from "axios";

var readyDevices = [];
var rd = [];
var deviceStatus = "";
var infoMsg = "";
var capturePath = "";
var infoPath = "";

var header = {
  "Content-Type": "text/plain",
};

//var infoHeader = {
//  "Content-Type": "text/xml",
//};

// port discovery function  invoke RD services API
export async function discoverPort() {
  for (let i = 11100; i <= 11120; i++) {
    let url = "http://localhost:" + i;
    // console.log(i);

    var rdx = rdservice(url);

    let xmlDat = xmlToString(rdx.data);
    console.log("readyDevices --- " + xmlDat);
    if (xmlDat) {
      deviceStatus = xmlDat
        .getElementsByTagName("RDService")[0]
        .getAttribute("status");
      infoMsg = xmlDat
        .getElementsByTagName("RDService")[0]
        .getAttribute("info");
      capturePath = xmlDat
        .getElementsByTagName("Interface")[0]
        .getAttribute("path");
      infoPath = xmlDat
        .getElementsByTagName("Interface")[1]
        .getAttribute("path");
    }
    // add in array if the data set is not empty
    if (deviceStatus === "READY") {
      readyDevices.push({
        url: url,
        deviceStatus: deviceStatus,
        infoMsg: infoMsg,
        capturePath: capturePath,
        infoPath: infoPath,
      });
      console.log("check rd state --- " + JSON.stringify(readyDevices));
    }
  }

  return rd;
}

async function rdservice(url) {
  var result = await apiCaller("RDSERVICE", url, header, "xml");
  // console.log("hh" + JSON.stringify(result))
  if (result == null) {
    return "na";
  }

  return result;

  // if (readyDevices.length === 0) {
  //   console.log("Unable to detect any registered bio-metric device!");
  // } else if (readyDevices.length > 1) {
  //   console.log("Multiple devices detected! Please use only one device.");
  // }
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
  if (res === null || res === undefined) {
    return null;
  }
  var parser = new DOMParser();
  var xmlDat = parser.parseFromString(res, "text/xml");
  // console.log("xml to " + xmlDat)
  return xmlDat;
}

export { readyDevices };
