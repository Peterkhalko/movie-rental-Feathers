const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  customer: objectId().required(),
  movie: objectId().required(),
});
module.exports.schema = schema;
