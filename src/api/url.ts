import { ENV, getEnvValue } from "../constants";

const BASE_URL = getEnvValue(
  ENV.API_BASE_URL as string,
  "https://farmmmantra-backend-production.up.railway.app",
);

const API_VERSION = "/api/v1";

// USER/AUTH
export const AUTH_URLS = {
  LOGIN: `${BASE_URL}${API_VERSION}/user/login`,
  SIGNUP: `${BASE_URL}${API_VERSION}/user/signup`,
};

// ARTISAN
export const ARTISAN_URLS = {
  BASE: `${BASE_URL}${API_VERSION}/artisan`,
};

// PRODUCTS
export const PRODUCT_URLS = {
  BASE: `${BASE_URL}${API_VERSION}/product`,
  BY_ID: (id: number | string) => `${BASE_URL}${API_VERSION}/product/${id}`,
  OPTIONS: `${BASE_URL}${API_VERSION}/product/options`,
  BY_CATEGORY_ID: (id: number | string) =>
    `${BASE_URL}${API_VERSION}/product/category/${id}`,
};

// INQUIRY
export const INQUIRY_URLS = {
  BASE: `${BASE_URL}${API_VERSION}/inquiry`,
};

// VIEW
export const VIEW_URLS = {
  BASE: `${BASE_URL}${API_VERSION}/view`,
  BY_PRODUCT_ID: (id: number | string) =>
    `${BASE_URL}${API_VERSION}/view/${id}`,
};

// HOMESCREEN
export const HOMESCREEN_URLS = {
  BASE: `${BASE_URL}${API_VERSION}/homescreen`,
};

// CATEGORY
export const CATEGORY_URLS = {
  BASE: `${BASE_URL}${API_VERSION}/category`,
};
