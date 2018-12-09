import session from "express-session";
import mongoSessionStore from "connect-mongo";

module.exports = ({ server, mongoose }) => {
  const MongoStore = mongoSessionStore(session);

  server.use(
    session({
      name: "moneytracker.sid",
      secret: "GpR0BEzSCpCjVMv",
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 14 * 24 * 60 * 60 // save session 14 days
      }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000
      }
    })
  );
};
