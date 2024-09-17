import { defineConfig, loadEnv } from "@medusajs/utils";

loadEnv(process.env.NODE_ENV, process.cwd());

export default defineConfig({
  admin: {
    vite: () => {
      return {
        server: {
          fs: {
            strict: false,
          },
        },
      };
    },
  },
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      authCors: process.env.AUTH_CORS,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: {
    brandModuleService: {
      resolve: "./modules/brand",
      definition: {
        isQueryable: true,
      },
    },
  },
});
