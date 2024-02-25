const app = require('./app');
const dotenv = require('dotenv');
// config
dotenv.config({path:'./config/config.env'});

const connectDatabase = require('./config/database');
const cloudinary = require("cloudinary");

// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})

// config
dotenv.config({path:'./config/config.env'});

// Database Connection
connectDatabase()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

// port
const PORT = process.env.PORT || 4000;

// server
const server = app.listen(PORT,()=>{
    console.log(`server has started on http://localhost:${PORT}`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1)
    })
});