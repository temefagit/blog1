const config = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? `${VERCEL_GIT_COMMIT_REF}.vercel.app`
      : "http://localhost:3000",
};

export default config;