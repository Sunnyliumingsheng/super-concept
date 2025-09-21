import sqlite3 from 'sqlite3';
import { open ,Database} from 'sqlite';

// sqlite3 verbose 可以打印调试信息
sqlite3.verbose();

async function openDatabase(name: string):Promise<Database> {
  // 打开数据库，如果不存在会自动创建
  const db: Database = await open({
    filename: './' + name + '.db',
    driver: sqlite3.Database
  });
  return db;
}
async function execSql(db: Database, execsql: string) :Promise<void>{
   await db.exec(execsql);
}
async function runSql(db:Database,runsql:string):Promise<any>{
  const result = await db.run(runsql);
  return result;
}


export { openDatabase, execSql, runSql };