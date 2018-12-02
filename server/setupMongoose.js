module.exports = mongoose => {
  const dev = process.env.NODE_ENV !== "production";

  const MONGODB_URL = dev
    ? process.env.MONGODB_TEST_URL
    : process.env.MONGODB_PRODUCTION_URL;

  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  };
  mongoose.connect(
    MONGODB_URL,
    options
  );
};
