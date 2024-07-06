import User from "../models/model.js";

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.error("Error in getAll function -->", error);
    res.status(500).send({ status: 500, message: "Internal Error" });
  }
};

const addUser = async (data) => {
  try {
    const user = new User(data);
    const savedUser = await user.save();
    return savedUser.toObject();
  } catch (error) {
    console.error("Error in addUser function -->", error);
    throw error;
  }
};


const findByone = async (filter) => {
  try {
    return await User.findOne(filter);  // Ensure the findOne call is awaited
  } catch (error) {
    console.error("Error in findByone function -->", error);
    throw error;
  }
};

export {
  getAll,
  addUser,
  findByone
};
