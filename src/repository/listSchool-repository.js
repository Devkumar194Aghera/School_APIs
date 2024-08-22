const { School } = require("../models/index");

const listSchool_Repository = async (filters) => {
  try {
    // Get all the schools matching the filters
    const allSchools = await School.findAll();
    return allSchools;
  } catch (error) {
    console.log("Repository error");
    throw error;
  }
};

module.exports = listSchool_Repository;
