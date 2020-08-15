const Chart = require("../models/Chart");

const ctrl = {};

ctrl.showCharts = async (req, res) => {
  await Chart.aggregate([
    { $sort: { created: 1 } },
    {
      $group: {
        _id: "$pollster",
        data: { $push: { percentage: "$percentage", created: "$created" } },
      },
    },
  ]).exec((err, data) => {
    if (err) throw err;

    return res.json({
      message: "Registros recuperados correctamente",
      data,
    });
  });
};

ctrl.addChart = async (req, res) => {
  const chart = new Chart(req.body);
  try {
    await chart.save();
    return res.json({
      mensaje: "Registro agregado correctamente",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = ctrl;
