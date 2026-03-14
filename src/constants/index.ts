export const getEnvValue = (
  key: string,
  fallback: string | null = null,
): string | null => {
  const value = import.meta.env[`VITE_ENV_${key}`] as string | undefined;
  console.log("Value:", value);
  if (value === undefined) {
    console.log("Value is undefined:");
    console.warn(`[env] Missing variable: VITE_ENV_${key}`);
    return fallback;
  }
  return value;
};

export const ENV = {
  API_BASE_URL: getEnvValue("API_BASE_URL"),
};
