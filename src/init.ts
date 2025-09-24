import { app } from 'electron';
import Store from 'electron-store';
import { openDatabase, execSql } from './sql.js';
import { createAndInitConfigSql } from './config.js';

const store = new Store({ name: 'app-state' });

function isFirstRun(): boolean {
  const hasRun = store.get('hasRunBefore') as boolean | undefined;
  if (hasRun) {
    // 目前是测试阶段，不管怎样都init
    initApp();
    return false;
  } else {
    initApp();
    store.set('hasRunBefore', true);
    return true;
  }
}

async function initApp() {
  // 创建配置 db
  const db = await openDatabase('config');
  await execSql(db, createAndInitConfigSql());
}

export { isFirstRun, initApp };