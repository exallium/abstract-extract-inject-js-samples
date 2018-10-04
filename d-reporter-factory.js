var config = require("./d-config");
var oldReporter = require('./b-old-impl');
var newReporter = require('./d-new-impl');

module.exports = {
    create: function() { 
        return (config.newReporter 
            ? newReporter 
            : oldReporter
        ).reporter();
    }
}