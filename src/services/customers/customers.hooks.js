const { authenticate } = require("@feathersjs/authentication").hooks;
const Joi = require("joi");
const { schema } = require("./customers.model");
const validate = require("feathers-validate-joi");
const adminAuth = require("../../hooks/admin");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [validate.form(schema, { abortEarly: false })],
    create: [validate.form(schema, { abortEarly: false })],
    update: [validate.form(schema, { abortEarly: false })],
    patch: [validate.form(schema, { abortEarly: false })],
    remove: [authenticate("jwt"), adminAuth()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
