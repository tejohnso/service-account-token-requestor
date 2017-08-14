# GCP Service Account Token Requestor
Requests an access token from the Google OAuth 2.0 Authorization Server.
This [probably isn't necessary](https://developers.google.com/identity/protocols/application-default-credentials) if using Google Compute Engine or Google App Engine.

### Example
Acquire a [Service Account](https://console.developers.google.com/permissions/serviceaccounts) json file.  

``` js
const tokenRequestor = require("service-account-token-requestor");

tokenRequestor.getToken(path_to_service_account_file)
.then(useTheToken);
```

### Test
Provide path to service account json file (relative to execution directory).

``` bash
npm test
```
