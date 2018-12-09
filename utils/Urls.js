const isDevelopmentMode = process.env.NODE_ENV !== "production";

export const BASE_URL = isDevelopmentMode
  ? process.env.DEV_BASE_URL
  : process.env.PROD_BASE_URL;
