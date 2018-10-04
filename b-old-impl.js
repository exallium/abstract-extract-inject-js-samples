var externalAnalytics = require('./ExternalAnalytics')

/*
 * Reporter Interface:
 * 
 * { 
 *   reportStop: function():void, 
 *   reportStart: function():void 
 * }
 */

module.exports = {
    reporter: function(/* dependencies */) {

        // setup

        return {
            reportStart: function() { externalAnalytics.report("START") },
            reportStop: function() { externalAnalytics.report("END") }
        };
    }
}