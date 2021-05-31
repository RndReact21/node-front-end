const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "10.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
  [
    "@babel/preset-react",
    {
      pragma: "dom", // default pragma is React.createElement (only in classic runtime)
      pragmaFrag: "DomFrag", // default is React.Fragment (only in classic runtime)
      throwIfNamespace: false, // defaults to true
      runtime: "classic", // defaults to classic
      // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
    },
  ],
];

const plugins = [
  [
    "@babel/plugin-transform-modules-commonjs",
    {
      allowTopLevelThis: true,
    },
  ],
];

module.exports = { presets, plugins };
