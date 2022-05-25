module.exports = function () {
  return (context) => {
    if (!context.params.user.isAdmin)
      throw new Error("Access denied/Forbidden");
    return context;
  };
};
