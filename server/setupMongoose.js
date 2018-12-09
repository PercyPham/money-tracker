module.exports = mongoose => {
  const isDevelopmentMode = process.env.NODE_ENV !== "production";

  const MONGODB_URL = isDevelopmentMode
    ? process.env.MONGODB_DEV_URL
    : process.env.MONGODB_PROD_URL;

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
