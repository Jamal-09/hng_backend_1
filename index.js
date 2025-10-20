const express = require("express");
const bodyParser = require("body-parser");
const stringRoutes = require("./routes/strings.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Welcome to the string analyzer API"));

app.use("/strings", stringRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
