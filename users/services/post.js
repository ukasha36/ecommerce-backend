import { addUser } from "../db/index.js";

const postData = async (data) => {
  try {
    return await addUser(data);
  } catch (error) {
    console.error("Error in postData function -->", error);
    throw error;
  }
};

export default postData;
