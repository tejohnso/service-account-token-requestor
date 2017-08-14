const jwt = require("jsonwebtoken");
const {private_key: privateKey, client_email: iss} = require("./tyler-test-pubsub-d0a370e5b67e.json");
const header = {"alg":"RS256","typ":"JWT"};
const scope = "https://www.googleapis.com/auth/devstorage.read_only";
const aud = "https://www.googleapis.com/oauth2/v4/token";
const algorithm = "RS256";
const expiresIn = 60 * 60;

module.exports = {
  create() {
    return jwt.sign({iss, scope, aud}, privateKey, {algorithm, expiresIn});
  }
};
