const ObjectsModel = require('@models/objects'),
      Query = require('@lib/query');

const getObjects = async(req, res) => {
    const query_params = req.query;
    if (!Object.getOwnPropertyNames(req.query).length) {
        return res.status(400).send({'error': 'Specify parameters'});
    }
    const sql = ObjectsModel.generateQuery(query_params);
    const data = await Query.execute(sql)
        .catch(e => {
            return res.status(400).send({'error': e.message});
        });
    return res.status(200).send({'data': data});
};

module.exports = {
    getObjects
};