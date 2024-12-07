// src/config/data-source.ts
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'user-registry',
  synchronize: process.env.NODE_ENV === 'development', 
  logging: process.env.NODE_ENV === 'development', 
  entities: [User], 
  migrations: ["src/migrations/*.ts"],
});

// Initialize the data source
export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization", err);
    throw err;
  }
};



// import { Pool } from "pg";

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: '123456',
//   port: 5432,
// });

// export default pool;
