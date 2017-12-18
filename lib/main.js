var http = require('http');
var path = require('path');
var fs = require('fs');
var UglifyJs = require('uglify-js');
var tempWrite = require('temp-write');
var open = require('open');

module.exports = function (filename, linktext) {
  filename = filename || process.argv[2];
  linktext = linktext || process.argv[3];

  if (!linktext || !filename || filename == 'help' || filename == '-h' || filename == '--help') {
    console.log('Usage: boomlet <filename> <linktext>\n\n  Example: boomlet code.js \'this bookmarklet goes boom!\'\n');
    process.exit(1);
  }

  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;

    var minified = UglifyJs.minify(data);
    if (minified.error) throw minified.error;

    var encoded = encodeURIComponent(minified.code);
    var code = 'javascript:(function(){' + encoded + '}())';

    fs.readFile(path.join(__dirname, '/boomlet.html'), 'utf8', function (err, data) {
      if (err) throw err;

      var output = data.replace('#code#', code).replace('#linktext#', linktext);

      var outfile = tempWrite.sync(output, 'boom.html');
      open(outfile);
    });
  });
};
