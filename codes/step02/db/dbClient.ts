import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

const DBPATH = "./data/dev.sqlite";

export class DbClient {
  private db: Database | null = null;
  private static instance: DbClient | null = null;
  private initPromise: Promise<void> | null = null;

  private constructor() {
    // private constructor to prevent direct instantiation
  }

  public static getInstance(): DbClient {
    if (!this.instance) {
      this.instance = new DbClient();
    }
    return this.instance;
  }

  public async getConnection(): Promise<Database> {
    try {
      if (!this.db) {
        this.db = await open({
          filename: DBPATH,
          driver: sqlite3.Database,
        });
      }

      // Ensure schema is created once before any query uses the connection.
      if (!this.initPromise) {
        this.initPromise = this.initializeDatabase();
      }
      await this.initPromise;

      return this.db;
    } catch (error) {
      throw error;
    }
  }

  public async closeConnection(): Promise<void> {
    if (this.db) {
      await this.db.close();
      this.db = null;
    }
  }

  // initialize the database with the necessary tables and seed data
  private async initializeDatabase(): Promise<void> {
    try {
      if (!this.db) {
        throw new Error("Database connection is not initialized.");
      }

      const db = this.db;
      await db.exec(`
                CREATE TABLE IF NOT EXISTS snippets (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    code TEXT
                );
            `);

      const row = (await db.get(`SELECT COUNT(*) as count FROM snippets`)) as { count: number };
      if (row.count === 0) {
        await db.run(`INSERT INTO snippets (title, code) VALUES (?, ?), (?, ?), (?, ?)`, [
          "Hello World",
          "console.log('Hello, World!');",
          "Array Map",
          "const res = [1,2,3].map(x => x * 2);",
          "Fetch API",
          "const data = await fetch('/api').then(r => r.json());",
        ]);
      }
    } catch (error) {
      throw error;
    }
  }
}

export interface Snippet {
  id: number;
  title: string;
  code: string;
}
