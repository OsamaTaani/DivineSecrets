const express = require('express');
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
 // check altere
// const { checkUserExistence, handleErrors } = require('./middleware');
const userController = require('./controllers/userController');
const authController = require("./controllers/authController");
const productController = require('./controllers/productController');
const cartController = require('./controllers/cartController');
const adminUserController = require("./controllers/adminUserController");
const productImageController = require('./controllers/productImageController');
const commentController = require('./controllers/commentController');
const profileController = require('./controllers/profileController');
const userDetails = require('./controllers/profileController');

const path = require("path");
require("dotenv").config();
require('./auth');
const db = require("./db");
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Routes
app.post('/register', userController.registerUser);
app.post('/login', userController.loginUser);
app.get('/home', productController.getAllProducts);
app.get('/categorys/:category', productController.getProductsByCategory);
app.get('/products_details/:id', productController.getProductById);
app.post('/add-to-cart', cartController.addToCart);
app.get('/user-cart/:userId', cartController.getUserCartWithImages);

app.post('/addComment',commentController.addComment);
app.put('/user/:userId', profileController.updateUser);
app.get('/user/:userId',userDetails.getUserDetails);
app.get('/getAllComments',commentController.getAllComments);

app.get('/users', adminUserController.userList);
app.get('/users/:id', adminUserController.userDetail);
// app.get('/users/create', userController.userCreateGet);
// app.post('/users/create', adminUserController.userCreatePost);
app.delete('/delete/:id', adminUserController.userDelete);
// app.delete('/users/:id/delete', adminUserController.userDeletePost);
app.get('/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/upload/:product_id', upload.single('image'), productImageController.uploadImage);
app.get('/product-image/:product_id', productImageController.getImageUrl);

// Error-handling middleware
// app.use(handleErrors);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/signinbygoogle', (req, res) => {
  res.send('<a href="/google">Authenticate with Google</a>');
});

app.get('/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] }));

app.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/protected',
  failureRedirect: '/google/failure'
}));

app.get('/protected', authController.isLoggedIn, authController.handleProtectedRoute);

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

