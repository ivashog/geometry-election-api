const pool = require('@lib/pgdb');

const getPolygonTypes = async () => {
    const { rows: data } = await pool.query(`
        SELECT * FROM polygon_types ORDER BY id ASC
    `).catch(e => {
        throw new Error('Error getting polygon types');
    });
    return data;
};

module.exports = {
    getPolygonTypes
};