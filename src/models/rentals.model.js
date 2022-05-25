// rentals-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const mongoose = require("mongoose");
module.exports = function (app) {
  const modelName = "rentals";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new mongoose.Schema({
    customer: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
      },
      phone: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 10,
      },
    }),
    movie: {
      required: true,
      type: new mongoose.Schema({
        title: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
        },
        dailyRentalRate: {
          type: Number,
          required: true,
          min: 0,
          max: 225,
        },
      }),
    },
    dateOut: {
      type: Date,
      default: Date.now,
    },
    dateIn: {
      type: Date,
      default: null,
    },
    rentalFee: {
      type: Number,
      min: 0,
      max: 10000,
      required: true,
    },
  });
  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
