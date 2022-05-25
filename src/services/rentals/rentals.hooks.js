const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("feathers-validate-joi");
const { schema } = require("../rentals/rentals.model");
const fetchCustomer = require("../../hooks/fetchCustomer");
const fetchMovie = require("../../hooks/fetchMovie");
const setRentalFee = require("../../hooks/setRentalFee");
const decreaseNumberInStocks = require("../../hooks/decreaseNumberInStocks");
const setMovie = require("../../hooks/setMovie");
const increaseNumberInStocks = require("../../hooks/increaseNumberInStocks");
const adminAuth = require("../../hooks/admin");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchMovie(),
      fetchCustomer(),
      setRentalFee(),
    ],
    update: [],
    patch: [authenticate("jwt"), setMovie()],
    remove: [authenticate("jwt"), adminAuth(), setMovie()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [decreaseNumberInStocks()],
    update: [],
    patch: [increaseNumberInStocks()],
    remove: [increaseNumberInStocks()],
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
