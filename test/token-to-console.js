const assert = require("assert");
const tokenRequestor = require("../index.js");

describe("Token Request", ()=>{
  it("provides a token", ()=>{
    return tokenRequestor.getToken(process.env.SERVICE_ACCT_FILE)
    .then((token)=>{
      console.info(token);
      assert(token);
    });
  });
});
