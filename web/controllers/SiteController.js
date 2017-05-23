/**
 * Site Controller
 */
export default (config) => ({
  index: (req, res) => {
    res.render('site/index', {
      title: 'node-starter',
      message: "A boilerplate for Node.js web applications"
    });
  },
});
