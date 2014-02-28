Package.describe({
  summary: "Meteor DataDog API"
});

Npm.depends({"node-dogstatsd": "0.0.4"});

Package.on_use(function (api) {
  api.add_files("node-dogstatsd.js", ["server","client"]);
  if (typeof api.export !== 'undefined') {
  	 api.export('dogstatsd', ['server','client']);
	}
});