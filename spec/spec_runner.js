//fake browser window
var jsdom       = require('jsdom').jsdom,
    sys         = require('sys'),
    window      = jsdom().createWindow(),
    coffee      = require('coffee-script'),
    jasmine     = require('jasmine-node');
global.jQuery   = require("jquery");
global.$        = global.jQuery;
global.window   = jsdom().createWindow();
global.document = global.window.document;

for(var key in jasmine) {
  global[key] = jasmine[key];
}

require("../lib/factory.js");

var target = "";

if (process.argv[2]) {
  if (!require('fs').statSync(process.argv[2]).isFile()) {
    target = process.argv[2];
  } else {
    target = __dirname + "/../" + process.argv[2];
  }
} else {
  target = process.cwd() + '/spec';
}

jasmine.executeSpecsInFolder(target, function(runner, log){
  process.exit(runner.results().failedCount);
}, false, true, "_spec.coffee$");
