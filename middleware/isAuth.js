console.clear();
const pool = require("../config/connectDB");
const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  try {
    //    import token
    // headers=> authorization
    const token = req.headers["authorization"];
    // console.log(token);
    //   if token dosn't exist
    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized1" }] });
    }
    // you are not authorized
    //  verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // console.log("user==============", user);

    //it is going to give use the user id (user:{id: user.id})
    req.user = decoded.user;
    // next
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};

module.exports = isAuth;
