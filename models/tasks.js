const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const TasksSchema = Schema({
  owner: {
    type: ObjectId,
    ref: 'User'
  },
  title: String,
  bids: [{
    bidder: {
      type: ObjectId,
      ref: 'User'
    },
    price: Number
  }]
});

const Tasks = mongoose.model('Tasks', TasksSchema);

module.exports = Tasks;