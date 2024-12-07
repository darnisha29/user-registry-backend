import e from "express";
import app from "./app";
import { AppDataSource } from "./config/db";
// Import the TypeORM DataSource

const PORT = process.env.PORT || 5000;

// Check the database connection before starting the server
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);  // Exit the application if the DB connection fails
  });

