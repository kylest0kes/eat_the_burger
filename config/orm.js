//import connection.js
const connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];
    
    for (var key in ob) {
      let value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

//CREATE
const orm = {
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });
      },
      insertOne: function (table, column, values, cb) {
        let queryString = `INSERT INTO ${table} ( ${column.toString()} ) VALUES (?,?)`;

        connection.query(queryString, values, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}
    

module.exports = orm;
    

