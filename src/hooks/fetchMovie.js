module.exports = function () {
  return async (context) => {
    const movieId = context.data.movie;
    const movieService = context.app.service("movies");
    const movie = await movieService.get(movieId);
    if (movie.numberInStock == 0) {
      throw new Error({ message: "movie out  of stock" });
    }
    console.log(context.data);
    context.data.movie = {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
      numberInStock: movie.numberInStock,
    };

    return context;
  };
};
