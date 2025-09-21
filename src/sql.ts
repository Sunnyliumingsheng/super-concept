import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// sqlite3 verbose 可以打印调试信息
sqlite3.verbose();

async function initDatabase() {
  // 打开数据库，如果不存在会自动创建
  const db = await open({
    filename: './mydatabase.db',
    driver: sqlite3.Database
  });

  // 创建表
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age INTEGER
    )
  `);

  return db;
}


export { initDatabase };