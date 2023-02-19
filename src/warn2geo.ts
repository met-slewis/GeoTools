import * as fs from 'fs';
import warning from './../res/Auck-Wind-Red.json';
import * as geo from 'geojson'

warning.polygons.map(function (poly, index) {
  poly.map(function (ll, index) {
    const a = ll[0]
    ll[0] = ll[1]
    ll[1] = a
  });
});

const features: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

warning.polygons.map(function(poly, index){
  let coords: geo.Position[][] = [];
  coords[0] = poly;
  const p: geo.Polygon = {
    type: "Polygon",
    coordinates: coords,
  }
  const f : geo.Feature = {
    type: "Feature",
    properties: {},
    geometry: p,  
  }
  features.features.push(f);
});

console.log(JSON.stringify(features))

fs.writeFileSync('out.json', JSON.stringify(features))
