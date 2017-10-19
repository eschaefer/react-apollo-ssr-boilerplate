require('dotenv').config();

export const IS_DEV = process.env.NODE_ENV !== 'production';
export const NODE_ENV = process.env.NODE_ENV || 'development';

export const PORT = process.env.APP_PORT || 3000;

export const HOST = 'localhost';
