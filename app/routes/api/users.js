/*
 * User API routes
 */
module.exports = (router) => {
  router.get('/', (req, res) => {
    res.json({
      message: 'List Users API',
    });
  });

  return router;
};
