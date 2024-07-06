import 'dotenv/config';
import express from 'express';
import routes from './src/routes/routes.js';
import mongoose from './src/dbconfig/db.connection.js';
import morgan from 'morgan';

const app = express();

// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_NAME:', process.env.DB_NAME);


// Middleware
// app.use(express.json());
// app.use(morgan("dev"));

// MongoDB connection
mongoose.connection.on("open", () => {
  console.log(`Mongoose connected to ${mongoose.connection.host}`);
});
mongoose.connection.on("error", (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

// Main routes
app.use('/', routes);

// Start server
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
