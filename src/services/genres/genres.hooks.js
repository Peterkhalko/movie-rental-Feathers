const { authenticate } = require("@feathersjs/authentication").hooks;
const { schema } = require("./genres.model");
const validate = require("feathers-validate-joi");
const adminAuth = require("../../hooks/admin");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    update: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    patch: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
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
