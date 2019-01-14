const pool = require('@lib/pgdb');

const execute = async (sql) => {
    const { rows: data } = await pool.query(sql).catch(e => {
        throw new Error('Invalid parameters');
    });
    return data;
};

module.exports = {
    execute
};