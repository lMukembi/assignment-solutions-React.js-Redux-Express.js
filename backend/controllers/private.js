exports.getPrivate = (req, res) => {
  res.status(200).json({
    success: true,
    data: "You are authorized to access private data",
  });
};
