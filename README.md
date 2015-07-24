# json2sass
Convert JSON to SASS!

[![Build status](https://travis-ci.org/satya164/json2sass.svg?branch=master)](https://travis-ci.org/satya164/json2sass)
[![Dependencies](https://david-dm.org/satya164/json2sass.svg)](https://david-dm.org/satya164/json2sass)
[![License](https://img.shields.io/npm/l/json2sass.svg)](http://opensource.org/licenses/mit-license.php)

## Why?
How many times do you need to access some variable which you've stored in a SCSS file in your JavaScript? Won't be it great if you could share the same variables in JavaScript and SCSS?

With this library, you can store your variables in JSON and convert it to SCSS just before building the files. It supports plain strings as well as lists and maps, even nested ones.

## Example
```json
{
    "blueviolet": "#7366bd",
    "bittersweetshimmer": "#bf4f51",
    "breakpoints": [ 320, 480, 720 ]
}
```

```scss
$blueviolet: #7366bd;
$bittersweetshimmer: #bf4f51;
$breakpoints: ( 320, 480, 720 );
```
