//import orm into this
const orm = require("../config/orm.js");

//write code
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },
    insertOne: function() {

    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    }
}

//export
module.exports = burger;