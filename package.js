
Package.describe({
  summary: "Meteor DataDog API"
});

Npm.depends({"node-dogstatsd": "0.0.4"});

Package.on_use(function (api) {
  api.add_files("node-dogstatsd.js", 'server');
  if (typeof api.export !== 'undefined') {
  	 api.export('StatsD', 'server');
	}
});
