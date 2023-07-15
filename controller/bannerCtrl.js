const Banner = require("../models/bannerModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const slugify = require("slugify");

const createBanner = asyncHandler(async (req, res) => {
    try {
      if (req.body.title) {
        req.body.slug = slugify(req.body.title);
      }
      const newBanner = await Banner.create(req.body);
      res.json(newBanner);
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = {
    createBanner,
  };