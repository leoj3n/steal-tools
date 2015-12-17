var bundle = require("../lib/graph/make_graph_with_bundles");
var comparify = require("comparify");

describe("bundle", function(){
	it("should work", function(done){

		bundle({
			config: __dirname+"/bundle/stealconfig.js",
			main: "bundle",
			logLevel: 3
		}).then(function(data){
			var graphCompare = require('./bundle/bundle_graph');
			comparify(data.graph, graphCompare, true);
			done();
		}, done);
	});

	it("works with globs", function(done){
		bundle({
			config: __dirname+"/bundle/stealconfig.js",
			main: "bundle",
			logLevel: 3,
			bundle: "app_*"
		}).then(function(data){
			var graphCompare = require('./bundle/bundle_graph');
			comparify(data.graph, graphCompare, true);
			done();
		}, done);
	});
});

