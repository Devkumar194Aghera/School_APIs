const { AddSchool_Service } = require("../services/index");

const addSchool_service = new AddSchool_Service();

const addSchool = async (req, res) => {
  try {
    const data = req.body;
    const newSchool = await addSchool_service.addSchool_service(data);
    return res.status(201).json({
      data: newSchool,
      success: true,
      message: "Successfully added the school ",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while adding the school data ",
      err: error,
    });
  }
};

module.exports = addSchool;
