const express = require("express");
const app = express();

const authCtrl = require("./authCtrl");

app.use(express.json());

app.post("/auth/register", authCtrl.registerUser);
// app.post('auth/login', )

const SERVER_PORT = 5050;

app.listen(SERVER_PORT, () => console.log("Up on 5050"));
