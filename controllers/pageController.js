const getIndexPage = (req, res) => {
  res.render("index");
};

const getAboutPage = (req, res) => {
  res.render("about");
};

module.exports = { getIndexPage, getAboutPage };
