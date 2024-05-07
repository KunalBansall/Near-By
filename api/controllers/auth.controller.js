import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  let hashedPassword; // Declare hashedPassword variable outside try block

  try {
    hashedPassword = bcryptjs.hashSync(password, 10);
    // Use the hashedPassword variable as needed
  } catch (error) {
    console.error("Error occurred while hashing the password:", error);
    // Handle the error appropriately
  }

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User Created succesfully");
  } catch (error) {
    next(error);
  }
};
