const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer =  livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100)
})

const app = express();

app.use(connectLiveReload());

app.use("/static", express.static("static"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});