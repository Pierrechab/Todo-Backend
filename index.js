const express = require("express");
const app = express();

app.get("/", function(req, res) {
	res.send("hi");
});

app.post("/create", function(req, res) {
	res.send("hi");
});

app.post("/update", function(req, res) {
	res.send("hi");
});

app.post("/delete", function(req, res) {
	res.send("hi");
});

app.listen(3000, function() {
	console.log("Server has started");
});
