import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db =  await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', 
    port: process.env.DB_PORT || 5000,        
    user: process.env.DB_USER || 'new_user',
    password: process.env.DB_PASSWORD || 'new_user_pass',
    database: process.env.DB_NAME || 'dynamic_one_page',
    ssl: {
        rejectUnauthorized: false
      }
});

db.connect(err => {
    if (err) {
        console.error('MySQL Connection Error:', err);
        return;
    }
    console.log('MySQL Connected...');
});

export default db;
