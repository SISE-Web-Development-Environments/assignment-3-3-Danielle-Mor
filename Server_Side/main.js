require("dotenv").config();
//#region express configures
const express = require("express");
var path = require("path");
const morgan = require("morgan");
const session = require("client-sessions");
const DButils = require("./routes/utils/DButils");
//const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//prints requessts logs
app.use(morgan(": method :url :status :response-time ms"));
/* app.use(express.static(path.join(__dirname, "public"))); //To serve static files such as images, CSS files, and JavaScript files
 */
/* app.use(bodyParser.json()); //To serve static files such as images, CSS files, and JavaScript files
 */
app.use(express.json()); // parse application/json

app.use(
  session({
    cookieName: "session", // the cookie key name
    secret: process.env.COOKIE_SECRET,
    // the encryption key
    duration: 20 * 60 * 1000, // expired after 60 min
    activeDuration: 0, // if expiresIn < activeDuration,
    //the session will be extended by activeDuration milliseconds
    cookie: {
      httpOnly: false,
    },
  })
);
//app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public")));
//app.use(cors());

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

//parse application/jason
const port = process.env.PORT || 3000;

//routes importing
const auth = require("./routes/auth");
const users = require("./routes/users");
const recipes = require("./routes/recipes");

//#region cookie middleware
app.use(function (req, res, next) {
  if (req.session && req.session.user_id) {
    DButils.execQuery("SELECT user_id FROM dbo.users")
      .then((users) => {
        if (users.find((x) => x.user_id === req.session.user_id)) {
          req.user_id = req.session.user_id;
        }
        next();
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});
//#endregion

app.get("/", (req, res) => res.send("welcome"));

app.use("/users", users);
app.use("/recipes", recipes);
app.use(auth);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send({ message: err.message, success: false });
});

const server = app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

process.on("SIGINT", function () {
  if (server) {
    server.close(() => console.log("server closed"));
  }
  process.exit();
});
