var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const bcrypt = require("bcrypt");
const { RegisterValidationRules, validate } = require("./utils/validator");

router.post(
  "/Register",
  /*  RegisterValidationRules, */
  /*   validate,
   */
  async (req, res, next) => {
    try {
      // parameters exists
      // valid parameters
      // username exists
      const users = await DButils.execQuery("SELECT username FROM dbo.users");

      if (users.find((x) => x.username === req.body.username))
        throw { status: 409, message: "Username taken" };

      // add the new username
      let hash_password = bcrypt.hashSync(
        req.body.password,
        parseInt(process.env.bcrypt_saltRounds)
      );
      await DButils.execQuery(
        `INSERT INTO dbo.users VALUES (default, '${req.body.username}', '${hash_password}','${req.body.firstName}',
        '${req.body.lastName}','${req.body.country}', '${req.body.email}', '${req.body.profilePicture}','','')`
      );
      res
        .status(201)
        .send({ message: " User Registered Succesfully", success: true });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/Login", async (req, res, next) => {
  try {
    // check that username exists
    const users = await DButils.execQuery("SELECT username FROM dbo.users");
    if (!users.find((x) => x.username === req.body.username))
      throw { status: 401, message: "Username or Password incorrect" };

    const user = (
      await DButils.execQuery(
        `SELECT * FROM dbo.users WHERE username = '${req.body.username}'`
      )
    )[0];

    // check that the password is correct
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      throw { status: 401, message: "Username or Password incorrect" };
    }

    // Set cookie
    req.session.user_id = user.user_id;

    // return cookie
    res.status(200).send({ message: "login succeeded", success: true });
  } catch (error) {
    next(error);
  }
});

router.post("/Logout", function (req, res) {
  req.session.reset(); // reset the session info --> send cookie when  req.session == undefined!!
  res.status(200).send({ message: "logout succeeded", success: true });
});

module.exports = router;
