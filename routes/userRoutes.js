const db = require('../db');

const checkUserExistenceInDB = async (email) => {
  try {
    // Check if the username is already taken
    const existingUser = await db.query('SELECT * FROM Users WHERE email = $1', [email]);

    return existingUser.rows.length > 0;
  } catch (error) {
    console.error('Error checking user existence in database:', error);
    throw error;
  }
};

const registerUserInDB = async (username, email, password) => {
  try {
    // Create a new user in the database
    const result = await db.query(
      'INSERT INTO Users(username, email, password) VALUES($1, $2, $3) RETURNING *',
      [username, email, password]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Error registering user in database:', error);
    throw error;
  }
};

const loginUserInDB = async (email, password) => {
  try {
    // Check if the username and password match
    const result = await db.query('SELECT * FROM Users WHERE email = $1 AND password = $2', [
      email,
      password,
    ]);

    if (result.rows.length === 0) {
      throw new Error('Invalid email or password');
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error logging in user in database:', error);
    throw error;
  }
};

module.exports = {
  checkUserExistenceInDB,
  registerUserInDB,
  loginUserInDB,
};