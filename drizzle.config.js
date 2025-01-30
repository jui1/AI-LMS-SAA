import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  dbCredentials:{
    url: 'postgresql://neondb_owner:BhHESo3rXC7v@ep-bitter-silence-a5iepddy-pooler.us-east-2.aws.neon.tech/ai-short-video-genrator?sslmode=require'
  }
 
});
