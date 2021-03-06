var mongoose = require("mongoose");
var env = process.env;
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/geoQuest" )

module.exports.Quests = require("./quests");
module.exports.User = require("./users");