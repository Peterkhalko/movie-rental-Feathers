module.exports = function () {
  return async (context) => {
    const rentalService = context.app.service("rentals");
    const rental = await rentalService.get(context.id);
    context.params.movie = rental.movie;
    return context;
  };
};
