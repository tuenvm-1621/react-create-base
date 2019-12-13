const presets = [
  [
    "@babel/env",
    {
      useBuiltIns: "usage",
    },
  ],
    "@babel/react",
    "@babel/flow"
  ];

  const plugins = [
    "@babel/transform-arrow-functions",
    "@babel/proposal-optional-chaining",
    "babel-plugin-styled-components"
  ];

module.exports = { presets, plugins };
