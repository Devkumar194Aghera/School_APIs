const { School } = require("../models/index");

const addSchool_Repository = async (data) => {
  try {
    const newSchool = await School.create({
      name: data.name,
      address: data.address,
      latitude: data.latitude,
      longitude: data.longitude,
    });
    return newSchool;
  } catch (error) {
    console.log("Repository Layer Error");
    throw error;
  }
};
module.exports = addSchool_Repository;
