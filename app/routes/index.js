const PolygonsController = require('@controllers/polygons'),
      ObjectsController = require('@controllers/objects'),
      TypesController = require('@controllers/types');

module.exports = (api) => {

    api.get('/polygons/types', TypesController.getPolygonTypes);
    api.get('/polygons', PolygonsController.getPolygons);

    //api.get('/polygons/election', PolygonsController.getPolygons);
    //api.get('/objects', ObjectsController.getObjects);

};
