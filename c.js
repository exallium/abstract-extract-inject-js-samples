var reporterFactory = require('./c-reporter-factory');
var reporter = reporterFactory.create();

reporter.reportStart();

// -- do work
console.log("working...");

reporter.reportStop();