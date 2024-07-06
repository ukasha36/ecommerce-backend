import { findByone } from "../db/index.js";
import postData from "../services/post.js";
 
import { createHash } from "../utils/hash.utils.js";

const signupController = async (req, res) => {
  try {
    const {name , email , password } = req.body
   
    //find user before signiing up
    const find = await findByone({ email: req.body.email });
    if (find) {
      return res.status(400).json({ message: "Email already exists" });

    }  

     //encrypting user password
     const hashedPassword = await createHash(password )

    const payLoad ={
      name ,
      email , 
      password : hashedPassword
    }



      const newUser = await postData(payLoad);

      console.log("User signup successfully -->", newUser);
      res.status(200).send({ success: true, status: 200, newUser });
    
  } catch (error) {
    console.error("Error in signup controller -->", error);
    res
      .status(500)
      .send({ success: false, status: 500, message: "Internal Error" });
  }
};

export default signupController;
