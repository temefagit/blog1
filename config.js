const config = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://your-vercel-project-url.vercel.app"
      : "http://localhost:3001",
};

export default config;
