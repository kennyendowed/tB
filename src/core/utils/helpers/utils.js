const crypto = require('crypto');
const algorithm = process.env.REACT_APP_ALGORITHM;






function asciiTOHexa(str) {
  console.log({ str });
  const arr1 = [];
  for (let n = 0, l = str.length; n < l; n += 1) {
    const hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return arr1.join("");
}
// async function encrypt(Securitykey,initVector,req) {
//   // generate 16 bytes of random data
//   //const initVector = crypto.randomBytes(16);
//   // console.log(req.body)
//   // console.log(JSON.stringify(req.body))
//   // protected data
//   const stringData=(req.body) ? req.body : req;
//   const message = JSON.stringify(stringData); // '{ firstname="akin", lastname="ade", mobile="08034743719", DOB=DateTime.Now, Gender="M", CURRENCYCODE="NGN",  ChannelID=1, ProductID=2 }';

//   console.log(message);
//   // secret key generate 32 bytes of random data
//   // const Securitykey = crypto.randomBytes(32);

//   // the cipher function
//   const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

//   let encryptedData = cipher.update(message, "utf-8", "hex");

//   encryptedData += cipher.final("hex");

//   console.log("Encrypted message: " + encryptedData);

//   return encryptedData;
// }
// const ivt = asciiTOHexa(ivr);
// const keyt = asciiTOHexa(keyr);
// const key = CryptoJS.enc.Hex.parse(keyt);
// const iv = CryptoJS.enc.Hex.parse(ivt);
//  const Encrypt = async (str) => {
//   try {
//     const encryptedRequest = await CryptoJS.AES.encrypt(JSON.stringify(str), key, {
//       iv,
//     }).ciphertext.toString(CryptoJS.enc.Hex);
//     return encryptedRequest;
//   } catch (er) {
//     console.log(er);
//     return null;
//   }
// };
//  const dencrypt = async (Securitykey,initVector,encryptedData) => {
//   const ivt = initVector;
// const keyt = Securitykey;
// const key = CryptoJS.enc.Hex.parse(keyt);
// const iv = CryptoJS.enc.Hex.parse(ivt);

//   const response = await CryptoJS.AES.decrypt(encryptedData, key, {
//     iv,
//     format: CryptoJS.format.Hex,
//   }).toString(CryptoJS.enc.Utf8);
//   console.log("Decrypted message: " + response);
//   return response;
// };

async function dencrypt(Securitykey,initVector ,encryptedCP) {

  
  const decipher = crypto.createDecipheriv(algorithm, Securitykey , initVector);

  let decryptedData = decipher.update(encryptedCP, "hex", "utf-8");

   decryptedData += decipher.final("utf-8");

 // console.log("Decrypted message: " + decryptedData);
  return decryptedData;



}

export  {dencrypt};