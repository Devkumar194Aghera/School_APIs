const handleNotFound = (req, res) => {
  return res.status(404).json({
    data: {},
    success: false,
    message: "Resource not found",
    err: "The requested resource could not be found on this server",
  });
};

module.exports = handleNotFound;
