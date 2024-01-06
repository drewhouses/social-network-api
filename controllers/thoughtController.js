const { Thought, User } = require("../models");

module.exports = {
  async createThought(req, res) {
    try {
      const thought = await Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username,
      });

      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getThoughtbyId(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { thoughtText: req.body.thoughtText },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!thought) {
        return res.status(404).json({ messsage: "No thought with that ID" });
      }

      const user = await User.findOneAndUpdate(
        { username: thought.username },
        { $pull: { thoughts: thought._id } },
        { new: true }
      );
      res.json({ message: "Thought successfully deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No Thought exists with that thoughtId" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.body.reactionId } } },
        { new: true }
      );

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
