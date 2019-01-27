const express = require('express');
const config = require('../config');
const initDB = require('./db/initialDB')
const Knex = require('knex');
const knex = Knex({
    client: config.db.client,
    port: config.db.port,
    connection: {
        host: config.db.connection.host,
        database: config.db.connection.database
    }
})

const server = () => {
    const app = express();
    const allConvini = knex('convini').select();

    app.get("/api/convini", (req, res, next) => {
        const { limit } = req.query;
        let store = [];
        if(!limit)return next();
        allConvini.then(
            convinis => {
                console.log('============convinis==========', convinis)
                for(let i = 1; i < limit + 1; i++) {
                    each = convinis[i]
                    store.push(each)
                }
                return res.json(store)
            }
        )
        // return res.json(store)

    })
    app.get("/api/convini", (req, res) => {
        return allConvini.then(
            convinis => {
                convinis.forEach(c => {
                    res.json(c)
                })
            })
    });

    app.get("/api/")


    return app;
};

module.exports = { server };