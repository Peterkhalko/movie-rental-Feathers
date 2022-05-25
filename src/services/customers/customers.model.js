const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId,
  name: Joi.string().min(2).max(50).required(),
  phone: Joi.string().min(10).max(10).required(),
  isGold: Joi.boolean().default(false),
});

module.exports.schema = schema;
