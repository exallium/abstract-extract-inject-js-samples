var reporter = require('./b-old-impl').reporter();

reporter.reportStart();

// -- do work
console.log("working...");

reporter.reportStop();