import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export const BASE_URL = env.REACT_APP_BASE_URL;