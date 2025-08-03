export const config = {
  headers: {
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
  withCredentials: true,
};
