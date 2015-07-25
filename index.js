"use strict";

function object2map(o) {
    var map = "";

    for (var item in o) {
        map += item2scss(item) + ": " + item2scss(o[item]) + ",\n";
    }

    return "(\n" + map.replace(/(,\n)$/, "") + "\n)";
}

function array2list(arr) {
    var list = "";

    for (var i = 0, l = arr.length; i < l; i++) {
        list += item2scss(arr[i]);

        if (i !== l - 1) {
            list += ", ";
        }
    }

    return "( " + list + " )";
}

function item2scss(item) {
    switch (typeof item) {
    case "string":
        return /(,|:)/.test(item) ? "\"" + item + "\"" : item;
    case "number":
        return item;
    case "object":
        if (item === null) {
            return "null";
        } else if (Array.isArray(item)) {
            return array2list(item);
        } else {
            return object2map(item);
        }
        break;
    default:
        return "";
    }
}

function json2scss(data) {
    var json = typeof data === "string" ? JSON.parse(data) : data,
        scss = "";

    for (var v in json) {
        scss += "$" + v + ": " + item2scss(json[v]) + ";\n";
    }

    return scss;
}

module.exports = json2scss;
