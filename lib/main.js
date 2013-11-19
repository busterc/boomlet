var http = require('http'),
	path = require('path'),
	fs = require('fs'),
	UglifyJs = require('uglify-js'),
	open = require('open');

exports.boom = function(filename, linktext){
	var _filename = filename || process.argv[2],
		_linktext = linktext || process.argv[3];

	if (!_linktext || !_filename || _filename == 'help' || _filename == '-h' || _filename == '--help') {
		console.log('Usage: boomlet <filename> <linktext>\nExample: boomlet code.js \'this bookmarklet goes boom!\'');
		process.exit(1);
	}

	fs.readFile(_filename, 'utf8', function(err, data){
		if(err) throw err;

		var code = 'javascript:(function(){' + encodeURIComponent(
			UglifyJs.minify(data, {fromString: true}).code
		) +  '}())';

		fs.readFile(__dirname+'/boomlet.html', 'utf8', function(err, data){
			if(err) throw err;
			var output = data.replace('#code#', code).replace('#linktext#', _linktext),
			outfile = path.resolve('./boom.html');

			fs.writeFile(outfile, output, 'utf8', function(err){
				if(err) throw err;
				open(outfile);
			});
		});
	});	
};
