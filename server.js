const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();
const corsOptions = {
  origin: [ "http://localhost:3000", "http://localhost:3001" ],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const port = process.env.PORT || 3000;
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./api/routes"); //importing route
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});


try {
  app.listen(port, () => console.log(`Server connected to http://localhost:${port}`))
} catch (error) {
  console.log('Cannot connect to the server')
}


