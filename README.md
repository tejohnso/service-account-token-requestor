# GCP Service Account Token Requestor
Requests an access token from the Google OAuth 2.0 Authorization Server.
This [probably isn't necessary](https://developers.google.com/identity/protocols/application-default-credentials) if using Google Compute Engine or Google App Engine.

### Example
First, acquire a [Service Account](https://console.developers.google.com/permissions/serviceaccounts) json file.
Then provide the path to `getToken`.

``` js
const tokenRequestor = require("service-account-token-requestor");
const path_to_service_account_file = "/home/user/private-keys/service-account.json";

//returns a promise if no callback is provided
tokenRequestor.getToken(path_to_service_account_file)
.then(useTheToken);

//callback
tokenRequestor.getToken(path_to_service_account_file, (token, error)=>{
  if (error) { return handleError(error); }
  useTheToken(token);
});
```

### Test
Provide path to service account json file in SERVICE_ACCT_FILE environment variable.

``` bash
SERVICE_ACCT_FILE="../private-keys/service-account.json" npm test
```
