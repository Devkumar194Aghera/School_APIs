const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const addSchool = require("./controllers/addSchool-controller");
const listSchool = require("./controllers/listSchool-controller");
const handleNotFound = require("./controllers/notFound-controller");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use("/", handleNotFound);

  app.post("/addSchool", addSchool);
  app.get("/listSchools", listSchool);

  app.listen(PORT, async () => {
    console.log(`Server started on port no : ${PORT} `);
  });
};

setupAndStartServer();
