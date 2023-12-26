import { postApiCaller } from "../PostApiCall";
import { encrMobile, hmacVal } from "../encryption";
import { refranceId, ts } from "../MetaData";

// get config data 
let pid = process.env.REACT_APP_PID
let appName = process.env.REACT_APP_APPNAME
let phone = "9999900000"



export const appConfig = (async (store) => {
    const config = {
        meta: {
            pid: "NFT",
            appName: "com.neobyt.agent",
            appVersion: "1",
            deviceId: "4FF7026ED71886C886A9A50E",
            deviceType: "MOB",
            os: "IOS 13.2.3",
            refId: "3006144612372112",
            ts: "2023-01-21 22:50:20",
            clientIp: "127.1.1.1",
            geoLat: "19.0911",
            geoLong: "72.9208",
            geoLocation: "Mumbai",
            reqAction: "appConfig"
        },
        pay: {
            mobileNo: "9999894870",
            appInstance: "register"
        }
    };


    const req = encrMobile(JSON.stringify(config), phone)

    let headers = {
        "Content-Type": "application/json",
        "User-Agent": "BLS_App",
        "reqHmac": hmacVal,
    }

    let body = JSON.stringify({
        "pid": "BLS",
        "req": req
    })

    const data = await postApiCaller(body, headers, 'device/config ')
    const res = data.res
    console.log("app config --- " + res)
    // localStorage.setItem('config', res)

    // let kk=JSON.parse(decrMobile(data.res))
    // console.log((kk));
    // let kk=storeToLocalDB('config',data,'JSON')
    // // console.log('kk---',kk);
    // return data;
}
)