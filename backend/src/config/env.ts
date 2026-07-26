import dotenv from 'dotenv'
import z from 'zod';

dotenv.config();

const envSchema = z.object({
    PORT:z.coerce.number().default(5432),
    DATABASE_URL:z.string()
})

export const env = {
    PORT: Number(process.env.PORT) || 5432,
    DATABASE_URL: process.env.DATABASE_URL!,
};