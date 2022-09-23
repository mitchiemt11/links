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

app.get("/.well-known/assetlinks.json", function (req, res) {
  const links = [
      {
        "relation": ["delegate_permission/common.handle_all_urls"],
        "target": {
          "namespace": "android_app",
          "package_name": "com.JaSure.qa",
          "sha256_cert_fingerprints":
            ["C3:84:38:7A:63:90:BE:E4:68:5F:2F:B2:86:EE:B5:8C:3D:82:04:19:3C:92:3F:1D:06:22:52:78:D1:EC:CE:D6"]
        }
      }
  ]
  res.json(links);
})

// start the server listening for requests
app.listen(process.env.PORT || 8000, 
	() => console.log("Server is running..."));
