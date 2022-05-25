// src/services/faqs/faqs.model.js
const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(5).max(50).required(),
  email: Joi.string().min(5).max(25).required(),
  password: Joi.string().min(5).max(1024).required(),
  isAdmin: Joi.boolean().default(false),
});

module.exports.schema = schema;
