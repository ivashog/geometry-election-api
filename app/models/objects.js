const generateQuery = (params) => {
    let sql = `
        select
        gp.id, gp.name,
        gp.object_type,
        gp.region_id, gp.geojson as geometry,
        gp.period_id, gp.actuality, gp.polling_station_id, gp.county_id,
        gp.is_tot, gp.address, gp.enter_geo_id, gp.enter_obj_id,
        ot.obj_cat_id as category_id
        from geometry_point gp
        join objects_types ot on gp.object_type=ot.id
        where `;
    Object.getOwnPropertyNames(params).forEach(param_name => {
        const prefix = param_name === 'obj_cat_id' ? 'ot' : 'gp';
        sql += `${prefix}.${param_name}=${params[param_name]} and `;
    });
    return sql.slice(0, sql.length-4);
};

module.exports = {
    generateQuery
};
