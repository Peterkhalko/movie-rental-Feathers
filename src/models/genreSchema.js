module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
      trim: true,
    },
  });

  return schema;
};
