import { app } from 'electron';
import fs from 'fs';
import path from 'path';

const markerFile = path.join(app.getPath('userData'), '.first-run');

 function isFirstRun(): boolean {
  if (!fs.existsSync(markerFile)) {
    fs.writeFileSync(markerFile, 'initialized');
    return true;
  }
  return false;
}

import {openDatabase,execSql} from './sql.js';
async function init(){
    //创建配置db
    const db = await openDatabase('config.db');
    
}
export { isFirstRun };