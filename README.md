# GCP Service Account Token Requestor
Requests an access token from the Google OAuth 2.0 Authorization Server.
This [probably isn't necessary](https://developers.google.com/identity/protocols/application-default-credentials) if using Google Compute Engine or Google App Engine.

### Example
Acquire a [Service Account](https://console.developers.google.com/permissions/serviceaccounts) json file.  

``` js
const tokenRequestor = require("service-account-token-requestor");
const path_to_service_account_file = "../private-keys/service-account.json";

tokenRequestor.getToken(path_to_service_account_file)
.then(useTheToken);
```

### Test
Provide path to service account json file in SERVICE_ACCT_FILE environment variable.

``` bash
SERVICE_ACCT_FILE="../private-keys/service-account.json" npm test
```
