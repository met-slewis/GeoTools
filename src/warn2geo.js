"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
var Auck_Wind_Red_json_1 = __importDefault(require("./../res/Auck-Wind-Red.json"));
Auck_Wind_Red_json_1["default"].polygons.map(function (poly, index) {
    poly.map(function (ll, index) {
        var a = ll[0];
        ll[0] = ll[1];
        ll[1] = a;
    });
});
var features = {
    type: "FeatureCollection",
    features: []
};
Auck_Wind_Red_json_1["default"].polygons.map(function (poly, index) {
    var coords = [];
    coords[0] = poly;
    var p = {
        type: "Polygon",
        coordinates: coords
    };
    var f = {
        type: "Feature",
        properties: {},
        geometry: p
    };
    features.features.push(f);
});
console.log(JSON.stringify(features));
fs.writeFileSync('out.json', JSON.stringify(features));
