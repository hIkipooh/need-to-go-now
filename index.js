const config = require("./config.js");
const src = require("./src")(config);
const express = require("express");
const app = express();

app.use(morgan("dev"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,OPTIONS,PATCH"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    next();
  });
  
  // 3. Parse request bodies as json
  app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));
  
  // 4. If the requests begin with '/api', hand them off to the API router
  app.use("/api", apiRouter);
  app.use(express.static(`${__dirname}/public`)); // otherwise load the client app
  
  // 5. Catch unhandled errors thrown by any of the previous middleware steps
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (err.stack) {
      if (err.stack.match("node_modules/body-parser"))
        return res.status(400).send("Invalid JSON");
    }
  
    services.logger.log(err);
    return res.status(500).send("Internal Error.");
  });
  
  /**
   ********************************START SERVER********************************
   ****************************************************************************
   */
  
  app.listen(config.express.port, () => {
    services.logger.log(`Server up and listening on port ${config.express.port}`);
  });
  