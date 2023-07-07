const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv');
const User = require('../models/User');

class AuthController {
  async login(email, password){
    try {
      const user = await User.findOne({ email: email, isDeleted: false });
      if(!user) {
        const error = new Error("A user with this email could not be found.");
        error.statusCode = 401;
        throw error;
      }
      if(bcrypt.compare(password, user.password)){
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id.toString(),
          },
          process.env.TOKEN_KEY,
          { expiresIn: '72h' }
        );
        return {token, userId: user._id.toString(), name: user.name, email: user.email};
      } else {
        const error = new Error('Incorrect password');
        error.statusCode = 401;
        throw error;
      }
    } catch (error) {
      return error.message;
    }
  }

  async signupEmail(email, password, name){
    
    try {
      const user = await User.findOne({ email: email, isDeleted: false });
      console.log(user)
      if(user){
        const error = new Error("User with this email already exists.");
        error.statusCode = 422;
        throw error;
      }
      console.log(email)
      console.log(name)
      // console.log(hashedPw)
      const hashedPw = await bcrypt.hash(password, 12);
      
      const newUser = await User.create({ email: email, password: hashedPw, name});
      const token = jwt.sign(
        {
          email: newUser.email,
          userId: newUser._id.toString(),
        },
        process.env.TOKEN_KEY,
        { expiresIn: '72h' } // expires in 3 days
      );
      return {token, userId: newUser._id.toString(), name: newUser.name, email: newUser.email};
    } catch (error) {
      return error.message;
    }
  }

  async changePassword(){}

  async forgetPassword(){}
}

module.exports = AuthController;