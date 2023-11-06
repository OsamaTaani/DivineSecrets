const db = require('../db');

const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Request Body:', req.body);

  try {
    // Check if the username is already taken
    const existingUser = await db.query('SELECT * FROM Users WHERE email = $1', [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user in the database
    const result = await db.query(
        'INSERT INTO Users(username, email, password) VALUES($1, $2, $3) RETURNING *',
        [username, email, password]
      );
      

    const newUser = result.rows[0];
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// User Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the username and password match
    const result = await db.query('SELECT * FROM Users WHERE email = $1 AND password = $2 ', [
      email,
      password,
    ]);
    // console.log(result);
    const payload= {
      email : result.rows[0].email,
      username : result.rows[0].username,
      user_id: result.rows[0].user_id,
    }
    // console.log("dsata",payload)
   
    console.log(result);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });


    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });
    
    res.status(200).json({
      message: "User sigined in successfully",
      token: token,
      user_id: user_id,
    });
    console.log(token);
    console.log(user_id);



    // const user = result.rows[0];
    // res.status(200).json({ message: 'Login successful', user });


  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};