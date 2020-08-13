const { render } = require('../utility').nextResponse;

exports.renderIndexPage = (req, res, next) => {
  return render(req, res, 'index', {});
}