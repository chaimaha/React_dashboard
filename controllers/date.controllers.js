const pool = require("../config/connectDB");
//get all the dates
exports.DateControllers = async (req, res) => {
  try {
    const dates = await pool.query("select date from vente ");

    if (dates.rows.length == 0) {
      return res.status(400).send({ errors: [{ msg: "pas de donnée" }] });
    }
    res.status(200).send(dates.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "failed" }] });
  }
};
