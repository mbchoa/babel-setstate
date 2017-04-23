var fs = require('fs');
var babel = require('babel-core');
var plugin = require('./index.js');

var fileName = process.argv[2];

fs.readFile(process.argv[2], function (err, data) {
    if (err) throw err;

    var out = babel.transform(data.toString(), {
        plugins: [ plugin ]
    });

    console.log(out.code);
});
