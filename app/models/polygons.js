const generateQuery = (params) => {
    let sql =  `
        SELECT
            id, name, koatuu,
            polygon_type_id, region_id,
            county_id, polling_station_id,
            polygon_object_data_id, is_tot,
            to_call, geojson_polygon
        FROM polygon_objects
        WHERE `;

    Object.getOwnPropertyNames(params).forEach(param_name => {
        sql += `${param_name}=${params[param_name]} AND `;
    });
    return sql.slice(0, sql.length-4);
};

module.exports = {
    generateQuery
};