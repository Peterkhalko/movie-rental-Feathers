const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  title: Joi.string().min(1).max(255).required(),
  genreId: objectId().required(),
  dailyRentalRate: Joi.number().min(0).max(255).required(),
  numberInStocks: Joi.number().min(0).max(255).required(),
});
module.exports.schema = schema;
