import bcrypt from "bcrypt";
import userModel from "../model/userSchema";
import { generateToken } from "../middleware/auth";


export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await userModel.findOne({ email: email});
  
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(202).json({ message: "Incorrect Password " });
      }
      else{
        const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      email,
      password: hashedPassword,
    });
          user =await newUser.save();
      }
  
      
      const { _id} = user;
  
      const token = generateToken(_id,"user");
      res.status(200).json({ token: token});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };