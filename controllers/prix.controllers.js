const pool = require("../config/connectDB");
//get all the prices
exports.PrixControllers = async (req, res) => {
  try {
    const prix = await pool.query("select prix from vente ");

    if (prix.rows.length == 0) {
      return res.status(400).send({ errors: [{ msg: "pas de donnée" }] });
    }
    res.status(200).send(prix.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "failed" }] });
  }
};
