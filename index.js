require("dotenv").config();
const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const app = Express();

app.use(logger("dev"));
app.use(cors());
app.use(Express.static("client"));
app.use(bodyParser.json());

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
