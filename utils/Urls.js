const isDevMode = process.env.NODE_ENV !== "production";

export const PORT = process.env.PORT || 3000;

export const BASE_URL = isDevMode
  ? `http://localhost:${PORT}`
  : process.env.PROD_BASE_URL;
