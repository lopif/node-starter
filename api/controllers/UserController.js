export default (config) => ({
  index: (req, res) => {
    res.json({
      message: 'List Users API',
    });
  },
}); // module
