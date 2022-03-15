module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // node를 지원하는 코드를 만들어준다. jest를 사용할 때
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
