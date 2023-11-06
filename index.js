// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const cors = require("cors");
// const jwt = require("jsonwebtoken");

// // const crypto = require('crypto');
// // const secretKey = crypto.randomBytes(32).toString('hex');
// // console.log('Generated Secret Key:', secretKey);

// require('./auth');
// const db =require("./db");


// const app = express();
// app.use(cors());

// function isLoggedIn(req, res, next) {
//   req.user ? next() : res.sendStatus(401);
// }

// app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => {
//   res.send('<a href="/google">Authenticate with Google</a>');
// });

// app.get('/google',
//   passport.authenticate('google', { scope: [ 'email', 'profile' ] }
// ));

// app.get( '/google/callback',
//   passport.authenticate( 'google', {
//     successRedirect: '/protected',
//     failureRedirect: '/google/failure'
//   })
// );

// app.get('/protected' ,  isLoggedIn,async (req, res) => {
//     try {
//         const userEmail = req.user && req.user.emails && req.user.emails[0] && req.user.emails[0].value;
//         const userid = req.user.id;
//         const displayName = req.user.displayName;
//         // const [firstName, lastName] = displayName.split(' ');

//         // Query the database to check if the email from Google already exists
//         const checkEmailQuery = 'SELECT * FROM users WHERE email = $1';
//         const sendemail = await db.query(checkEmailQuery, [userEmail]);
//         if (sendemail.rows.length > 0) {
//             const payload = {
//                 // first_name: firstName,
//                 // last_name: lastName,
//                 username:displayName,
//                 email: userEmail,
//                 user_id: userid,
//                 // role: sendemail.rows[0].role_id
//             }

//             const secretKey = process.env.SECRET_KEY;
//             const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });
//             res.status(200).json({
//                 message: "User added successfully",
//                 token: token
//             });
//         } else {
//             // Email doesn't exist in the database
//             // const role_id = 1;
//             const values = [displayName, userEmail];
//             const query = `INSERT into users (username, email) values ($1, $2) RETURNING user_id`;
//             const user = await db.query(query, values);

//             const payload = {
//                 displayName,
//                 email: userEmail,
//                 user_id: userid,
//                 // role: role_id
//             }

//             const secretKey = process.env.SECRET_KEY;
//             const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });
//             res.status(200).json({
//                 message: "User added successfully",
//                 token: token
//             });
//         }
//     } catch (error) {
//         console.error(error);

//         res.status(500).json({
//             message: "Internal server error"
//         });
//     }
// });


// app.get('/logout', (req, res) => {
//   req.logout();
//   req.session.destroy();
//   res.send('Goodbye!');
// });

// app.get('/google/failure', (req, res) => {
//   res.send('Failed to authenticate..');
// });

// app.listen(3001, () => console.log('listening on port: 3001'));