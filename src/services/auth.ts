const TOKEN_KEY = "@app:token";

export const storeToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getStoredToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeStoredToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};
