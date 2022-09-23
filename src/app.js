// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))
app.set('json spaces', 4);

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// define the first route
app.get("/tech", function (req, res) {
  res.send("<h1>Jasure Tech</h1>")
})

app.get("/.well-known/assetlinks.json", function (req, res) {
  const links = [
      {
        "relation": ["delegate_permission/common.handle_all_urls"],
        "target": {
          "namespace": "android_app",
          "package_name": "com.JaSure.qa",
          "sha256_cert_fingerprints":
            ["91:1E:56:49:C9:04:04:9D:92:0A:E6:6B:63:68:48:78:3D:37:74:3A:FA:12:01:AF:5A:E0:8B:8C:8C:32:2B:FC"]
        }
      }
  ]
  res.json(links);
})

// start the server listening for requests
app.listen(process.env.PORT || 8000, 
	() => console.log("Server is running..."));
