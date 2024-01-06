const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const { format_date } = require("../utils/data");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 180,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (x) => format_date(x),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
