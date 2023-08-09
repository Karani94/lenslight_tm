const Photo = require("../models/photoModels");

const createPhoto = (req, res) => {

  console.log('kim ol', req.body)

  const photo = Photo.create(req.body);
  res.status(201).json({
    succeded: true,
    photo,
  });
};

module.exports = { createPhoto };
