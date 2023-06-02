const express = require("express");
const app = express();

const apiRoter = require("./route/api.js");
const data = require("./data/data.json");
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello wordld!");
});
app.use("/api", apiRoter);

const mongoose = require("mongoose");
const mongodb = "mongodb+srv://NewAdmin:badauth@tasks.ovwgffx.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(mongodb)
    .then(console.log("Database Connected"))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`in port ${ port } !`);
})
