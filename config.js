const config = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://blog-tobeginwith.vercel.app"
      : "http://localhost:3001",
};

export default config;