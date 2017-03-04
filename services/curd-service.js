const mongoose = require('mongoose');

class CURD {
  constructor(model) {
    this.model = mongoose.model(model);
  }

  query(conditions) {
    return this.model.find(conditions);
  }

  create(data) {
    console.log(data)
    return new this.model(data).save();
  }

  update(conditions, data) {
    return this.model.update(conditions, data);
  }

  remove(conditions) {
    return this.model.remove(conditions);
  }

}

module.exports = CURD;