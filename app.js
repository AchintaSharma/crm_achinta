const express = require('express');
const app = express();
const serverConfig = require('./configs/server.config');
const dbConfig = require('./configs/db.config');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to the DB");
});

db.once("open", () => {
    console.log("Connected to the MongoDB");
});




app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port no: ${serverConfig.PORT}`);
})