const config = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://blog1-tobeginwith.vercel.app"
      : "http://localhost:3000",
};

export default config;