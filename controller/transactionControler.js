const Transaction = require("../models/Transaction");

//@desc Get all transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.send(500).josn({
      success: false,
      error: "Server Error",
    });
  }
};
//@desc Add a transactions
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: message,
      });
    } else {
      return res.send(500).josn({
        success: false,
        error: "Server Error",
      });
    }
  }
};
//@desc Delete transaction
//@route DELETE /api/v1/transactions:id
//@access Public
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction Found",
      });
    }
    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.send(500).josn({
      success: false,
      error: "Server Error",
    });
  }
};
