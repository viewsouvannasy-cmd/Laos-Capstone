// library
import { neon } from "@neondatabase/serverless";

// helper function
import { getEnv } from "../utils/getEnv.js";

const sql = neon(getEnv("NEON_URL"));

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const connectDB = async (retry = 0) => {
  const maxRetries = 5;
  try {
    console.time("db-check");
    const [connect] = await sql`SELECT NOW()`;
    console.timeEnd("db-check");

    console.log("NeonDB connected", connect.now);
  } catch (error) {
    console.log(
      `NeonDB connection error (retry ${retry}/${maxRetries})`,
      error,
    );

    if (retry === maxRetries) {
      console.error("Cannot connect to NeonDB, exiting.");
      process.exit(1);
    }

    await sleep(5000);
    return connectDB(retry + 1);
  }
};

export { sql, connectDB };
