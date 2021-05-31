const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "7",
        firefox: "50",
        chrome: "57",
        safari: "10.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

module.exports = { presets };
