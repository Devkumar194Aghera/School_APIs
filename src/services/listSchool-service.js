const { listSchool_Repository } = require("../repository/index");
const calculateDistance = require("../utils/calculateDistance");
class listSchool_Service {
  async listSchool_service(data) {
    try {
      if (!data.latitude || !data.longitude) {
        throw "Some field are not filled properly";
      }
      const userLongitude = data.longitude;
      const userLatitude = data.latitude;

      let allSchools = await listSchool_Repository();

      const schoolsWithDistance = allSchools.map((school) => {
        const distance = calculateDistance(
          userLatitude,
          userLongitude,
          school.latitude,
          school.longitude
        );
        return {
          id: school.id,
          name: school.name,
          distance,
        };
      });

      // Sort schools by distance
      const sortedSchools = schoolsWithDistance.sort(
        (a, b) => a.distance - b.distance
      );

      return sortedSchools;
    } catch (error) {
      console.log("Service Layer Error :" + error);
      throw error;
    }
  }
}

module.exports = listSchool_Service;
