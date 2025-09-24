import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';
import fs from 'fs';

// sqlite3 verbose 可以打印调试信息
sqlite3.verbose();

/**
 * 打开数据库如果不存在会自动创建
 * @param name 数据库名称或完整路径（如果传入完整路径会直接使用）
 * @returns Database对象
 */
async function openDatabase(name: string): Promise<Database> {
  try {
    // 支持传入完整路径或仅传入名称
    let filename: string;
    if (path.extname(name) === '.db' || name.includes(path.sep) || path.isAbsolute(name)) {
      filename = name;
    } else {
      filename = path.join('db', name + '.db');
    }

    const absPath = path.resolve(filename);

    // 确保目录存在，避免 SQLITE_CANTOPEN
    fs.mkdirSync(path.dirname(absPath), { recursive: true });

    const db: Database = await open({
      filename: absPath,
      driver: sqlite3.Database
    });
    return db;
  } catch (err) {
    // 抛出更明确的错误，调用方应捕获
    throw new Error(`openDatabase failed for "${name}": ${(err as Error).message}`);
  }
}

async function execSql(db: Database, execsql: string): Promise<void> {
  await db.exec(execsql);
}
async function runSql(db: Database, runsql: string): Promise<any> {
  const result = await db.run(runsql);
  return result;
}

export { openDatabase, execSql, runSql };