var oldReporter = require('./b-old-impl').reporter;

module.exports = {
    create: function() { return oldReporter(); }
}