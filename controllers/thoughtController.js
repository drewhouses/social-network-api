const { Thought, User } = require("../models");

// createThought function
// findOneAndUpdate() to get the user with the id specified in the REST call
// and creating a new thought under this user

//Get all thoughts for a user

//get one thought by ID

// update thought

// delete thought

// add a reaction

// delete a reaction

module.exports = {
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body.thought);

      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
