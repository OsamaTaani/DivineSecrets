const env = require("dotenv");

const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      console.log(decoded);
      next();
  
    } catch (error) {
      console.error('Error authenticating user:', error);
      res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
  