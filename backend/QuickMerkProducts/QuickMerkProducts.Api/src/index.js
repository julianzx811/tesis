// In src/index.js
const express = require("express");
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./routes/ProductsRoutes");
const ErrorHandler = require("./middlewares/ErrorHandler");

const app = express();
//delete "process.env.PORT ||" to test localy
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/Products", v1WorkoutRouter);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
