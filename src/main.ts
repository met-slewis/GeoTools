import * as fs from 'fs';
import warning from './../res/bop-thunder.json';

type longLat = number[];
type polyType = longLat[];
type coordinatesType = polyType[];

type polygonType = {
  type: string;
  coordinates?: coordinatesType[];
}

type featureType = {
  type: string;
  properties?: any;
  geometry?: polygonType;
}

type geojsonType = {
  type: string;
  features: featureType[];
}

const geojson: geojsonType = {
  type: "FeatureCollection",
  features: [],
}

warning.polygons.map(function (poly, index) {
  poly.map(function (ll, index) {
    const a = ll[0]
    ll[0] = ll[1]
    ll[1] = a
  });
  const feature: featureType = {
    type: "Feature",
    properties: {},
  }
  const p: polygonType = {
    type: "Feature",
    coordinates: [],
  }
  p.coordinates[0].push(poly);
  feature.geometry = p;

//  feature.geometry.coordinates[0].push(poly);
  geojson.features.push(feature)
});

// const temp = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": warning.polygons
//       }
//     }
//   ]
// }

console.log(JSON.stringify(geojson))

fs.writeFileSync('out.json', JSON.stringify(geojson))
