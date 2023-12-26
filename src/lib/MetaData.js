import moment from "moment/moment.js";
// const agentId = sessionStorage.getItem('agentId')
const agentId = "780670026401"



//-----------------------TS---------------------
 function TS(){
    return moment().format('YYYY-MM-DD  h:mm:ss')
}
export const ts=TS()

export function Ts(){
    return moment().format('YYYY-MM-DD  h:mm:ss')
}



//----------------------------------------device id -------------------------------------
function getDeviceId() {
    var navigator_info = window.navigator;
    var screen_info =window.screen;
    var uid = navigator_info.mimeTypes.length;
    uid += navigator_info.userAgent.replace(/\D+/g,'');
    uid += navigator_info.plugins.length;
    uid += screen_info.height || '';
    uid += screen_info.width || '';
    uid += screen_info.pixelDepth || '';
     return uid;
    }
export const deviceId = getDeviceId()



//-------------------logi ref------------------
export const refranceId=()=>{
    const d = new Date();
    let year = d.getFullYear()
    let refId = year.toString().substr(-1) + moment().format("DDDHHmmss") + agentId 
    console.log("refId ---- " + refId)
    return refId
    }

    

    // export const refranceIdYear = () => {
    //     const d = new Date();
    //     let year = d.getFullYear() % 10;
    //     let refId = year + moment().format("DDDHHmmss") + agentId;
    //     return refId;
    //   };