module.exports = {
  apps: [
    {
      name: "App",
      script: "src/App.js",
      watch: true,
      ignore_watch: ["node_modules", "logs"],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
