const PolygonsModel = require('@models/polygons'),
      Query = require('@lib/query');

const getPolygons = async (req, res) => {
    const query_params = req.query;

    if (!Object.getOwnPropertyNames(query_params).length) {
        return res.status(400).send({'error': 'No params specified'});
    }

    let data = await Query.execute(
        PolygonsModel.generateQuery(query_params)
    ).catch(e => {
        return res.status(400).send({'error': e.message});
    });

    return res.status(200).send({'data': data});
};


module.exports = {
    getPolygons
};