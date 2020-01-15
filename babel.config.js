const presets = [ // pre-determined set of plugins
  [
    '@babel/env', // allow to use latest JS
    {
      // config handling polifills
      useBuiltIns: 'usage', // add specific imports for polyfills when in used for each file ( same polifill is loaded as one)
    },
  ],
  '@babel/react', // includes with bunch of react plugins
  '@babel/flow', // default define variables' type
];

const plugins = [ // apply transformation in code
  '@babel/transform-arrow-functions',
  '@babel/proposal-optional-chaining', // enable to do this: foo === null ? void 0 : foo.bar => foo?.bar;
  'babel-plugin-styled-components',
  '@babel/plugin-proposal-class-properties',
];

module.exports = { presets, plugins };
