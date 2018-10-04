var reporter = require('./ExternalAnalytics');

reporter.report("START");

// -- do work
console.log("working...");

reporter.report("END");