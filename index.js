const https = require("https");
const JWT = require("./create-jwt.js");

const url = require("url").parse("https://www.googleapis.com/oauth2/v4/token");
const method = "POST";
const headers = {headers: {
"content-type": "application/x-www-form-urlencoded",
"accept": "*/*"
}};

const requestOptions = Object.assign({}, url, {method}, headers, {rejectUnauthorized: false});

const grant_type = "urn:ietf:params:oauth:grant-type:jwt-bearer";
const assertion = JWT.create();
const postData = require("querystring").stringify({grant_type, assertion});

const req = https.request(requestOptions, (resp)=>{
  resp.pipe(process.stdout);
});

req.end(postData, {encoding: "utf8"});
