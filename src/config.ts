interface Config{
    testMode: boolean;
    apiKey:string;
    baseUrl:string;
}

// 原始的配置
const config: Config = {
    testMode: true,
    apiKey: "0ee1885fa8bf477d8b0979eb999b9f1c",
    baseUrl: "https://api.deepseek.com"
};

function escapeSqlString(s: string): string {
    return s.replace(/"/g, '""');
}


/**
 * 不仅仅能用来初始化，还能用来生成新的配置信息
 * @returns 创建并初始化配置表的SQL语句
 */
function createAndInitConfigSql():string{
    const createSql =
      "create table if not exists config(" +
      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
      "testMode BOOLEAN," +
      "apiKey TEXT," +
      "baseUrl TEXT" +
      ");";

    const insertSql =
      "insert into config(" +
      "testMode," +
      "apiKey," +
      "baseUrl" +
      ") values (" +
      (config.testMode ? 1 : 0) + "," +
      `"${escapeSqlString(config.apiKey)}",` +
      `"${escapeSqlString(config.baseUrl)}"` +
      ");";

    return createSql + insertSql;
}


export { config, createAndInitConfigSql };