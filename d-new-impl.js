var acmeAnalytics = require('./AcmeReporting')

module.exports = {
    reporter: function(/* dependencies */) {
        var impl = "new impl";
        return {
            reportStart: function() { acmeAnalytics.report(impl, "START") },
            reportStop: function() { acmeAnalytics.report(impl, "END") }
        };
    }
}
