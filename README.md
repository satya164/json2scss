# json2scss
Convert JSON config files to SCSS!

[![Build status](https://travis-ci.org/satya164/json2scss.svg?branch=master)](https://travis-ci.org/satya164/json2scss)
[![Dependencies](https://david-dm.org/satya164/json2scss.svg)](https://david-dm.org/satya164/json2scss)
[![License](https://img.shields.io/npm/l/json2scss.svg)](http://opensource.org/licenses/mit-license.php)

## Why?
How many times do you need to access some variable which you've stored in a SCSS file in your JavaScript? Won't be it great if you could share the same variables in JavaScript and SCSS?

With this library, you can store your variables in JSON and convert it to SCSS just before building the files. It supports plain strings as well as lists and maps, even nested ones.

## Example

Sample JSON data:
```json
{
    "blueviolet": "#7366bd",
    "bittersweetshimmer": "#bf4f51",
    "breakpoints": [ 320, 480, 720 ]
}
```

Gnereated SCSS code:
```scss
$blueviolet: #7366bd;
$bittersweetshimmer: #bf4f51;
$breakpoints: ( 320, 480, 720 );
```

## Usage

### Command line

To use the command line version, globally install `json2scss`,

```sh
npm install -g json2scss
```

To convert a JSON file to SCSS, run,

```sh
json2scss input.json > output.scss
```

And you're done.

### Code

To use it in the code, locally install `json2scss`,

```sh
npm install --save-dev json2scss
```

To convert a JSON string or plain object into SCSS,

```javascript
var json2scss = require("json2scss"),
    json = require("./data.json");

console.log(json2scss(json));
```
