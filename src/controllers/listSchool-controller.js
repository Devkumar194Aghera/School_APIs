const { listSchool_Service } = require("../services/index");

const listSchool_service = new listSchool_Service();

const listSchool = async (req, res) => {
  try {
    const data = req.body;
    const newSchool = await listSchool_service.listSchool_service(data);
    return res.status(201).json({
      data: newSchool,
      success: true,
      message: "Successfully list the schools ",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while listing the school data ",
      err: error,
    });
  }
};

module.exports = listSchool;
