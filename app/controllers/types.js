const TypesModel = require('@models/types');

const getPolygonTypes = async (req, res) => {
    const data = await TypesModel.getPolygonTypes().catch(e => {
        return res.status(400).send({'error': e.message});
    });
    return res.status(200).send({'data': data});
};

module.exports = {
    getPolygonTypes
};