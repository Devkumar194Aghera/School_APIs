const { addSchool_Repository } = require("../repository/index");

class AddSchool_Service {
  async addSchool_service(data) {
    try {
      if (!data.name || !data.address || !data.latitude || !data.longitude) {
        throw "Some field are not filled properly";
      }

      const Required_data = {
        name: data.name,
        address: data.address,
        latitude: data.latitude,
        longitude: data.longitude,
      };

      const newSchool = await addSchool_Repository(Required_data);
      return newSchool;
    } catch (error) {
      console.log("Service Layer Error :" + error);
      throw error;
    }
  }
}

module.exports = AddSchool_Service;
