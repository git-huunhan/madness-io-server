const Auth = require("../models/auth");
const jwt = require("jsonwebtoken");

exports.getAdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email: email, password: password })
      .sort({ createdAt: -1 })
      .exec();

    const token = jwt.sign(
      { email: email, password: password },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    // save user token
    user.token = token;

    let parseItems = [];
    parseItems.push({
      user: user,
      accessToken: token,
    });
    res.json(parseItems);
  } catch (err) {
    console.log(err);

    res.status(400).json({
      err: "There is no user corresponding to the email address.",
    });
  }
};

exports.getAdminData = async (req, res) => {
  try {
    const user = await Auth.find({}).sort({ createdAt: -1 }).exec();

    res.json(user);
  } catch (err) {
    console.log(err);

    res.status(400).json({
      err: err.message,
    });
  }
};
