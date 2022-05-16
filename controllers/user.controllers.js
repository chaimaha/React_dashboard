const pool = require("../config/connectDB");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  try {
    // req.body= name , email , password
    const { name, email, password } = req.body;
    // test email
    const findUser = await pool.query("select * from users Where email=$1", [
      email,
    ]);
    // email should be unique
    if (findUser.rows.length > 0) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email should be unique" }] });
    }

    // hashaed password (bcrypt)
    const hashedpassword = await bcrypt.hash(password, saltRounds);

    // new user
    let newUser = await pool.query(
      "INSERT INTO users (id,name, email, password) VALUES ($1, $2, $3,$4) RETURNING *",
      [Math.random(255), name, email, hashedpassword]
    );

    // CREATE the TOKEN with jwt
    const token = jwt.sign(
      {
        id: newUser.id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    // response
    res.status(200).send({ msg: "register succ", user: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "user not saved" }] });
  }
};

exports.Login = async (req, res) => {
  try {
    // email & password
    const { email, password } = req.body;
    //   test : if the email is exist
    const findUser = await pool.query("select * from users Where email=$1", [
      email,
    ]);
    // console.log("finded user =================", findUser.rows[0]);
    // if the email dosn't exist
    // bad credential
    if (findUser.rows.length == 0) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    // test password
    //   password in  BD== password
    const comparePass = await bcrypt.compare(
      password,
      findUser.rows[0].password
    );
    // wrong password
    // bad crential
    if (!comparePass) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    // CREATE A TOKEN
    const token = jwt.sign(
      {
        id: findUser.id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.status(200).send({ msg: "login successfully", user: findUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "can not login" }] });
  }
};

// module.exports = { Register,  };
