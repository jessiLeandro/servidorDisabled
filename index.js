const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const app = Express();

app.use(logger("dev"));
app.use(cors());
app.use(Express.static("client"));
app.use(bodyParser.json());

const port = 443;

app.listen(port, () => console.log(`Server started on port ${port}`));
