import dotenv from 'dotenv';

dotenv.config();

export default {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3020,
    API_URL: process.env.API_URL || '/api/v1',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://AdminUser:florecitarockera@127.0.0.1:27017/?authMechanism=SCRAM-SHA-256&authSource=db_ecommerce',
    DATABASE: process.env.DATABASE || 'db_ecommerce',
    DB_USER: process.env.DB_PASSWORD || 'florecitarockera',
    DB_PASSWORD: process.env.DB_USER || 'AdminUser',
}