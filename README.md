# boomlet
Bookmarklet compiler encloses, encodes, minifies your Javascript file and automatically opens an HTML page with your new bookmarklet for immediate use.

1. Write some tricky Javascript and save it to a file.
1. Run boomlet.
1. Drag, drop and begin using your bookmarklet immediately.

## Version
1.0.0

## Installation
```sh
npm i boomlet -g
```

## CLI Usage
```sh
boomlet <filename> <linktext>
```

## Makefile Usage (i.e. Sublime Text, etc.)
```sh
BOOMFILE := filename.js
BOOMTEXT := 'This Bookmark Goes BOOM!'

boom:
    boomlet $(BOOMFILE) $(BOOMTEXT)

.PHONY: boom
```

<!---
# *Easter Egg:* Local Mode

## Local Installation
```sh
npm i boomlet
```

## Local App Usage
```sh
require('boomlet').boom(<filename>, <linktext>);
```
-->

## Dependencies
* [open](https://github.com/pwnall/node-open) - opens the default browser
* [uglify-js](http://lisperator.net/uglifyjs) - eliminates uneccessary whitespace

## License
The MIT License (MIT)

Copyright (c) 2013 Buster Collings

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.