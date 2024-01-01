const { User } = require("../models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find().populate("user");
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserbyId(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).populate(
        "user"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createNewUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
