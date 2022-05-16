const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const {
  validation,
  registerValidate,
  loginValidate,
} = require("../middleware/validateUser");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("testing router");
// });

/*
@method: POST
@ path:http:localhost:5000/api/user/register
@ parameter: req.body  

*/
router.post("/register", registerValidate(), validation, Register);

/*
@method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body  
*/
router.post("/login", loginValidate(), validation, Login);

/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
*/
router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "authorized", user: req.user });
});

// default export
module.exports = router;
