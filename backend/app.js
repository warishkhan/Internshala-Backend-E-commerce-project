const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'});
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors')
const fileUpload = require("express-fileupload");
const errorMiddleware = require('./middleware/error')
const path = require("path");
// config
dotenv.config({path:'./config/config.env'});

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// route imports
const product = require('./routes/productRoutes')
const user = require('./routes/userRoute')
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use('/api/v1',product)
app.use('/api/v1',user)
app.use('/api/v1',order)
app.use("/api/v1", payment);

// middleware for errors
app.use(errorMiddleware)

module.exports = app;