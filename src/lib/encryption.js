import crypto from "crypto-browserify";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || require("buffer").Buffer;
const date = new Date();



var tag = "";
const auth= process.env.REACT_APP_AUTH
const hmacKey=process.env.REACT_APP_HMACKEY
const MOB_ENC_SALT =process.env.REACT_APP_MOB_ENC_SALT
const billerEncryptionSalt = process.env.REACT_APP_BIILLER_SALT
const pid = process.env.REACT_APP_PID
const mobile=process.env.REACT_APP_MOB
const internalSalt=process.env.REACT_APP_INTERAL_SALT



//-------------------------ymd--------------------------
const ymd = date.getFullYear().toString()
.concat(String(date.getMonth() + 1).padStart(2, "0"))
.concat(date.getDate().toString().padStart(2, "0"));






//-------------encSecure -----------------
function encSecure(req,keyStr){
  const keyHashStr=  crypto.createHash("sha256").update(keyStr.toString()).digest('hex');
  var keyHash= new Buffer.from(keyHashStr,"hex");
var encData=gcmEncrypt(req,keyHash)
return encData.toString("base64");
}

//--------------decSecure-------------------
function decSecure(res,keyStr){ 
  const keyHashStr=  crypto.createHash("sha256").update(keyStr.toString()).digest('hex');
  var keyHash= new Buffer.from(keyHashStr,"hex");
var decData=gcmDecrypt(res,keyHash)
return decData;
}













//-------------encInternal -----------------
function encInternal(req){
  // const keyStr  =   env auth + env TokenType
  const keyStr=auth
  const keyHashStr=  crypto.createHash("sha256").update(keyStr.toString()).digest('hex');
  var keyHash= new Buffer.from(keyHashStr,"hex");
var encData=gcmEncrypt(req,keyHash)
return encData.toString("base64");
}

//--------------decrInternal-------------------
function decrInternal(res){ 
  // const keyStr  =   env auth + env TokenType;
  const keyStr=auth
  const keyHashStr=  crypto.createHash("sha256").update(keyStr.toString()).digest('hex');
  var keyHash= new Buffer.from(keyHashStr,"hex");
var decData=gcmDecrypt(res,keyHash)
return decData;
}






//------------------encrMobile------------------------
 function encrMobile(plainText,mobile) {
    var req = plainText
      var hash = crypto.createHash("sha256").update(mobile.toString().concat(MOB_ENC_SALT.toString().concat
        (ymd))).digest('hex');
      var mobHex = parseInt(mobile).toString(16);
      var mobLen = mobHex.length;
    
      var hexLen = mobLen.toString().padStart(2, "0");
      var lenHex = hexLen.length;
      var subHash = hash.slice(- (64 - (mobLen + lenHex)));
      var keyHash = new Buffer.from(hash, "hex");
    
      var demo = subHash.concat(mobHex).concat(hexLen);
      var padHash = new Buffer.from(demo, "hex");
      var outDat = gcmEncrypt(req, keyHash);
      var outDatLen = Buffer.byteLength(outDat);
    
      var padHashLen = Buffer.byteLength(padHash);
    
      var encrStr = new Buffer.alloc(outDatLen + padHashLen);
      for (let i = 0; i < outDatLen; i++) {
        encrStr[i] = outDat[i];
      }
      for (let i = 0; i < padHashLen; i++) {
        encrStr[i + outDatLen] = padHash[i];
      }
    
      var encData=encrStr.toString("base64")
      return encData
    }

    
//---------------------decrMobile----------------------
function decrMobile(inputData) {
    var enc = new Buffer.from(inputData, 'base64')
    var encLen = Buffer.byteLength(enc)
    const encrStr = new Buffer.alloc(encLen - 32)
    for (let i = 0; i < encLen - 32; i++) { encrStr[i] = enc[i] }
    const hexMob = new Buffer.alloc(32)
    for (let i = 0; i < 32; i++) { hexMob[i] = enc[encLen - 32 + i] }
    var hexMob1 = new Buffer.from(hexMob, 'ascii').toString('hex')
    var mobLen = hexMob1.slice(-2)
    var mobHex = hexMob1.slice(0, -2).slice(-mobLen)
    var mobile = parseInt(mobHex, 16)
    var date = new Date()
    var ymd = date.getFullYear().toString().concat(String(date.getMonth() + 1).padStart(2, '0')).concat(date.getDate().toString().padStart(2, '0'))
    var hash = crypto.createHash('sha256').update(mobile.toString().concat(MOB_ENC_SALT).toString().concat(ymd)).digest('hex')
    var keyHash = new Buffer.from(hash, 'hex')
    // console.log(gcmDecrypt(encrStr, keyHash));
    return gcmDecrypt(encrStr, keyHash)
  }















//-----------------------------gcmEncrypt-----------------
function gcmEncrypt(inpStr, aesKey) {
  // console.log('aesKey---',aesKey);
  // console.log('inpStr---',inpStr);
  var tagLen = 16;
  var iv = crypto.randomBytes(12);
  var encrypted_key64 = encrypt64(inpStr, aesKey, iv);
  var enc = new Buffer.from(encrypted_key64, 'base64')
  var encLen = Buffer.byteLength(enc);
  var tagLen = Buffer.byteLength(tag);
  const encrStr = new Buffer.alloc(encLen + tagLen + 12);
  
  for (let i = 0; i < 12; i++) {
    encrStr[i] = iv[i];
  }
  for (let i = 0; i < tagLen; i++) {
    encrStr[i + 12] = tag[i];
  }
  for (let i = 0; i < encLen; i++) {
    encrStr[i + 12 + tagLen] = enc[i];
  }
  return encrStr;
}



//--------------------------- GCM Decryption-------------------------
     function gcmDecrypt(encData, key) {
    var tagLen = 16
    var ivLen = 12
    var iv = encData.slice(0, 12)
    var tag = encData.slice(12, 12 + 16)
    var encStr = encData.slice(12 + 16)
    var decStr = decrypt64(encStr, key, iv, tag);
    // console.log('decrStr----', decStr);
    return decStr;
  }




//---------------------------encrypt64-------------------
var encrypt64 = ((val, aesKey, iv) => {
  let cipher = crypto.createCipheriv('aes-256-gcm', aesKey, iv)
  let encrypted = cipher.update(val, 'utf8', 'base64')
  encrypted += cipher.final('base64')
  tag = cipher.getAuthTag()
  return encrypted
})

//----------------------decrypt64--------------
  var decrypt64 = ((encrypted, key, iv, tag) => {
    let decipher = crypto.createDecipheriv('aes-256-gcm', key, iv)
    decipher.setAuthTag(tag)
    let decrypted = decipher.update(encrypted, 'base64', 'utf8')
     return decrypted + decipher.final('utf8')
  })



//-----------------encrBiller-----------------
function encrBiller(plain_text, agentId) {
//   console.log('biller plainText-- ',plain_text );
//   console.log('biller agent Id-- ',agentId);
  var keySalt = Buffer.from(billerEncryptionSalt, "base64");
  var hmac = getHmac(billerEncryptionSalt, "BLS-" + agentId);
  var rByte = crypto.randomBytes(37);
  var hmacLen = Buffer.byteLength(hmac);
  var keySalthLen = Buffer.byteLength(keySalt);
  var keyStr = new Buffer.alloc(hmacLen + keySalthLen);
  for (let i = 0; i < hmacLen; i++) {
    keyStr[i] = hmac[i];
  }
  for (let i = 0; i < keySalthLen; i++) {
    keyStr[i + hmacLen] = keySalt[i];
  }
  var hash = crypto.createHash("sha256").update(keyStr).digest("hex");
  var keyHash = new Buffer.from(hash, "hex");
  var outDat = gcmEncrypt(plain_text, keyHash);
  var outDatLen = Buffer.byteLength(outDat);
  var encrStr = new Buffer.alloc(outDatLen + hmacLen + 37);
  for (let i = 0; i < outDatLen; i++) {
    encrStr[i] = outDat[i];
  }
  for (let i = 0; i < hmacLen; i++) {
    encrStr[i + outDatLen] = hmac[i];
  }
  for (let i = 0; i < 37; i++) {
    encrStr[i + outDatLen + hmacLen] = rByte[i];
  }
//   console.log( encrStr.toString("base64"));
  return encrStr.toString("base64");
}



function decrBiller(inpData){
  var enc = Buffer.from(inpData, "base64");
  var keySalt = Buffer.from(billerEncryptionSalt, "base64");
  var encLen = Buffer.byteLength(enc);
  var encrStr = new Buffer.alloc(encLen - 69);

  for (let i = 0; i < encLen - 69; i++) {
    encrStr[i] = enc[i];
  }
  var hmac = new Buffer.alloc(32);
  for (let i = 0; i < 32; i++) {
    hmac[i] = enc[encLen - 69 + i];
  }

  var hmacLen = Buffer.byteLength(hmac);
  var keySalthLen = Buffer.byteLength(keySalt);
  var keyStr = new Buffer.alloc(hmacLen + keySalthLen);
  for (let i = 0; i < hmacLen; i++) {
    keyStr[i] = hmac[i];
  }
  for (let i = 0; i < keySalthLen; i++) {
    keyStr[i + hmacLen] = keySalt[i];
  }
  var hash = crypto.createHash("sha256").update(keyStr).digest("hex");
  var keyHash = new Buffer.from(hash, "hex")  
  return gcmDecrypt(encrStr, keyHash);
}




//-------------------------panKey-----------------------------
export const SHA256=(input)=>{
  const hash = crypto.createHash('sha256').update(input, 'utf-8').digest('hex');
  return hash.toUpperCase()
}




//--------------------------------Hmac--------------------------
var hmacVal = getHmac(pid, ymd)
console.log("hmac val --- " + hmacVal)
function getHmac(pid, ymd) {
const value = pid.toString().concat(ymd)
  var hmac = crypto.createHmac("sha256", hmacKey).update(value).digest("hex")
  return hmac.toString("base64")
}




//-----------------------pamEncrpytion------------------
export const panEncrpyt=(plainText,agentId)=>{
  let keyString=agentId+internalSalt
  var key = crypto.Hash("sha256").update(keyString).digest("hex")
let keyHash=new Buffer.from(key,'hex')
  let encData=gcmEncrypt(plainText,keyHash)
  return (encData.toString('base64'))
}





//---------------------messageencrpt---------------------
var messageencrpt = (plainText, authToken, secretKey) => {
  const ymd = date
    .getFullYear()
    .toString()
    .concat(String(date.getMonth() + 1).padStart(2, "0"))
    .concat(date.getDate().toString().padStart(2, "0"));
    //console.log("ymd",ymd)
    var keyString = authToken + secretKey + ymd
    var key = crypto.Hash("sha256").update(keyString).digest("hex")
    var keyHash = new Buffer.from(key, "hex");
    var encData= gcmEncrypt(plainText,keyHash)
    return(encData.toString("base64"))
}


//------------------messageDecrypt------------------------
var messageDecrypt = (encData, authToken, secretKey) => {
  const ymd = date
    .getFullYear()
    .toString()
    .concat(String(date.getMonth() + 1).padStart(2, "0"))
    .concat(date.getDate().toString().padStart(2, "0"));
   // console.log("ymd",ymd)
   var keyString = authToken + secretKey + ymd
    var key = crypto.Hash("sha256").update(keyString).digest("hex")
    var keyHash = new Buffer.from(key, "hex");
    var encDataByte= new Buffer.from(encData, "base64");
    var decData = gcmDecrypt(encDataByte,keyHash)
    return(decData)
};



export {
  encrMobile,
  encSecure,
  decSecure,
  encInternal,
  decrInternal,
  hmacVal,
  encrBiller,
  decrBiller,
  decrMobile,
  messageencrpt,
  messageDecrypt
};