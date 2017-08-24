const https = require("https");
const JWT = require("./create-jwt.js");

const url = require("url").parse("https://www.googleapis.com/oauth2/v4/token");
const method = "POST";
const headerObj = {headers: {
"content-type": "application/x-www-form-urlencoded",
"accept": "*/*"
}};

const grant_type = "urn:ietf:params:oauth:grant-type:jwt-bearer";
const requestOptions = Object.assign({}, url, {method}, headerObj);

module.exports = {
  getToken(serviceAccountFilePath, cb) {
    const assertion = JWT.create(serviceAccountFilePath);
    const postData = require("querystring").stringify({grant_type, assertion});
    const req = https.request(requestOptions);

    const promise = new Promise((res, rej)=>{
      req.on("response", (resp)=>{
        let token = "";
        resp.on("error", rej);
        resp.on("data", data => token += data);
        resp.on("end", ()=>{
          try {
            token = JSON.parse(token).access_token;
          } catch(err) {
            rej(err);
          }
          res(token);
        });
      }).on("error", rej);

      req.end(postData);
    });

    if (!cb) { return promise; }

    promise.then(cb).catch(cb.bind(null, null));
  }
};
