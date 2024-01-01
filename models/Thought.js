const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 180,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

// TODO Need getter to format createdAt time on query

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
