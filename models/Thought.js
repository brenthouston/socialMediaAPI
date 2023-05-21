const { Schema, model, now } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      match: [/^\w+{1,280}$/]
    },
    createdAt: {
      type: Date, default: Date.now,
    },
    username: {
        type: String,
        required: true
      },
    reactions: [reactionSchema]
      
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reaction per user
userSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
