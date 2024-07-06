import getData from "../services/get.js";

const getController = async (req, res) => {
  try {
    const users = getData();

    res.status(200).send({ status: 200, data: users });
  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal Error " });
  }
};

export default getController;
