interface Config{
    testMode: boolean;
}

// 原始的配置
const config: Config = {
    testMode: false,
};

function configCreateSql():string{
    const createSql ="create table if not exists config("+
    "id INTEGER PRIMARY KEY AUTOINCREMENT,"+
    "testMode BOOLEAN"+
    ");";
    const insertSql ="insert into config("+
    "testMode"+
    ") values ("+
    (config.testMode?1:0)+
    ");";
    const sql = createSql + insertSql;

    return sql;
}

export { config, configCreateSql };