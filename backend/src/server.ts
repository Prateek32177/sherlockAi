import app from "./app.js";
import { env } from "./config/env.js";

const PORT = Number(env.PORT) || 3000;

app.listen(PORT,()=>console.log(`🚀 Sherlock API running on http://localhost:${PORT}`))