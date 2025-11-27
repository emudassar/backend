const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  res.send(`
    <form action="/host/add-home" method="POST">
    <input type="text" name = "homeDetail" placeholder="add home here">
    <input type="submit">
    `);
});

hostRouter.post("/host/add-home", (req, res, next) => {
  res.send(`
    <h1>Home added successfully.</h1>
    <a href="/">Go back to home</a>
    `);
});

module.exports = hostRouter
