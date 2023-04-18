import sqlite, { open } from 'sqlite';
import sqlite3, { Database } from 'sqlite3';

export async function openDB() {
  return open({
    filename: './src/database/database.db',
    driver: sqlite3.Database,
  });
}
