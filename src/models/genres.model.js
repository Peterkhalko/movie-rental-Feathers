module.exports = function (app) {
  const modelName = "genres";
  const mongooseClient = app.get("mongooseClient");
  const schema = require("./genreSchema")(app);
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
