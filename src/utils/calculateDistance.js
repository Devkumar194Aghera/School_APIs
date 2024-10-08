function calculateDistance(userLat, userLon, schoolLat, schoolLon) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = degreesToRadians(schoolLat - userLat);
  const dLon = degreesToRadians(schoolLon - userLon);
  const lat1 = degreesToRadians(userLat);
  const lat2 = degreesToRadians(schoolLat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers

  return distance;
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

module.exports = calculateDistance;
