const { authenticate } = require("@feathersjs/authentication").hooks;
const Joi = require("joi");
const { schema } = require("./users.model");
const validate = require("feathers-validate-joi");

const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
    ],
    update: [hashPassword("password")],
    patch: [hashPassword("password")],
    remove: [],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
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
