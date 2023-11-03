const express = require('express');
const cors = require("cors"); // check altere
// const { checkUserExistence, handleErrors } = require('./middleware');
const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Routes
app.post('/register', userController.registerUser);
app.post('/login', userController.loginUser);

// Error-handling middleware
// app.use(handleErrors);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});