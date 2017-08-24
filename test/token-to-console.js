const assert = require("assert");
const https = require("https");
const tokenRequestor = require("../index.js");
const simple = require("simple-mock");

describe("Token Request", ()=>{
  const requestMock = {
    on(evt, cb) {
      if (evt === "error") { cb(Error("mock-error"));}
      return requestMock;
    }
  };

  afterEach(()=>{simple.restore();});

  it("provides a token via promise", ()=>{
    return tokenRequestor.getToken(process.env.SERVICE_ACCT_FILE)
    .then((token)=>{
      console.info(token);
      assert(token);
    });
  });

  it("provides an error via promise", ()=>{
    simple.mock(https, "request").returnWith(requestMock);

    return tokenRequestor.getToken(process.env.SERVICE_ACCT_FILE)
    .then((token)=>{
      assert.fail("should not be here");
    })
    .catch(e=>{
      if (e.message === "should not be here") {throw e}
      console.log(e.message);
    });
  });

  it("provides a token via callback", (done)=>{
    tokenRequestor.getToken(process.env.SERVICE_ACCT_FILE, (token, e)=>{
      console.info(token);
      done(e);
    });
  });

  it("provides an error via callback", (done)=>{
    simple.mock(https, "request").returnWith(requestMock);

    tokenRequestor.getToken(process.env.SERVICE_ACCT_FILE, (token, e)=>{
      console.info(e);
      if (token) { done(Error("Should not have a token")); }
      done();
    });
  });
});
