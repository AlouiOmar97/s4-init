
var express = require("express")
var app = express();
var mongoConfig = require("./config/mongoConfig.json")
var mongoose = require("mongoose")
var http = require("http");
var usersRouter = require("./users/controller")
app.use("/", usersRouter)
mongoose.connect(mongoConfig.uri,
    {
        useNewUrlParser:
            true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("db connected");
    }).catch((err) => {
        console.log(err);
    })
var server = http.createServer(app)
server.listen(3000, () => {
    console.log("server started");
})
