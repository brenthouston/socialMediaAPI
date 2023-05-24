const { Schema, model, now } = require('mongoose');
const { ObjectId } = require('bson');


//REACTION SCHEMA

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      match: [/^\w{1,280}$/]
    },
    username: {
        type: String,
        required: true,
      },
    createdAt: {
        type: Date,
        default: Date.now
        
      },

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property 'timeStamp' that is readible
reactionSchema
  .virtual('timeStamp')
  // Getter
  .get(function () {
    return this.createdAt.toDateString();
  });


//THOUGHT SCHEMA

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      match: [/^\w{1,280}$/]
    },
    createdAt: {
      type: Date,
      default: Date.now,
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
