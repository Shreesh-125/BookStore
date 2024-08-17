import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashpassword = await bcryptjs.hash(password, 10);

    const createdUser = new User({
      fullname,
      email,
      password: hashpassword,
    });
    const response = await createdUser.save();
    if (response) {
      return res.status(200).json({
        user: {
          _id: createdUser._id,
          fullname: createdUser.fullname,
          email: createdUser.email,
        },
        message: "User created Successfully",
      });
    }

    return res.status(500).json({
      message: "Error with Database",
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email does not found" });
    }
    const isMatched = await bcryptjs.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: "Password is incorrect" });
    } else {
      return res.status(200).json({
        message: "Login Successfully",
      });
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json("Internal Server Error");
  }
};
