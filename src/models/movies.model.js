// movies-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const genreSchema = require("../models/genreSchema");
module.exports = function (app) {
  const modelName = "movies";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    title: {
      type: String,
      minLength: 1,
      maxLength: 225,
      required: true,
      trim: true,
    },
    genre: { type: genreSchema(app), required: true },
    dailyRentalRate: {
      type: Number,
      min: 0,
      max: 255,
      required: true,
    },
    numberInStocks: {
      type: Number,
      minLength: 0,
      maxLength: 255,
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
