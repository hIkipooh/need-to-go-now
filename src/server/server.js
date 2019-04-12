const express = require("express");
const config = require("../../config");
const Knex = require("knex");
const ward = require("../reference/ward");
const brand = require("../reference/brand");
const knex = Knex({
  client: config.db.client,
  port: config.db.port,
  connection: {
    host: config.db.connection.host,
    database: config.db.connection.database
  }
});

const server = () => {
  const app = express();
  const allConvini = knex("convini").select();

  app.get("/api/convini", (req, res, next) => {
    const { limit } = req.query;
    if (!limit) return next();
    allConvini.then(convinis => {
      let store = [];
      for (let i = 0; i < limit; i++) {
        store.push(convinis[i]);
      }
      res.json(store);
    });
  });
  app.get("/api/convini", (req, res) => {
    return allConvini.then(convinis => {
      res.json(convinis);
    });
  });

  app.get("/api/convini/ward/:ward", (req, res) => {
    return allConvini.then(convini => {
      const reqWard = req.params.ward.toLowerCase();
      const storeResult = [];
      let compare = "";
      for (let i = 0; i < ward.length; i++) {
        for (let key in ward[i]) {
          if (reqWard === key) {
            compare = ward[i][key];
          }
        }
      }
      convini.forEach(c => {
        let breakAddress = c.address.split(" ");
        if (breakAddress[1] === compare) storeResult.push(c);
      });
      res.json(storeResult);
    });
  });

  app.get("/api/convini/brand/:brand", (req, res) => {
    return allConvini.then(convini => {
      const reqBrand = req.params.brand.toLowerCase();
      const storeResult = [];
      let compare = "";
      for (let i = 0; i < brand.length; i++) {
        for (let key in brand[i]) {
          if (reqBrand === key) {
            compare = brand[i][key];
          }
        }
      }
      convini.forEach(c => {
        if (c.name.includes(compare)) storeResult.push(c);
      });
      res.json(storeResult);
    });
  });

  app.patch("/api/convini/:idOrName", express.json(), (req, res) => {
    knex("convini")
      .where({ id: `${req.params.idOrName}` })
      .update(req.body);

    return allConvini.then(c => res.json(c));
  });

  return app;
};

module.exports = { server };
