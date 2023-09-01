const queryModel = require("../Model/queriesModel");


//get all unanswered questions in admin pannel
const getqueriesControllers = async (req, res) => {
  
  try {
    const queries = await queryModel.find({});
    
    res.status(200).send({
      queries,
    });
  } catch (error) {
    res.send(error);
  }
};


//questions posted by customers whose answer they haven't got
const createqueriesControllers = async (req, res) => {
  try {
    const query = req.body;
    const newquery = new queryModel(query);
    await newquery.save();
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getqueriesControllers,
  createqueriesControllers,
};
