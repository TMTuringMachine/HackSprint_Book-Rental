const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
dotenv.config({ path: ".env" }); 
const cors = require("cors");
app.use(cors());
//using middleware to parse json data
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
require("./db/conn");
app.use("/", require("./routes/userRoutes"));
app.use("/order", require("./routes/orderRoutes"));

app.use("/cart/", require("./routes/cartcheckoutRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
