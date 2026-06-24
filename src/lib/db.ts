import { neon, Pool } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

export { sql, pool };
