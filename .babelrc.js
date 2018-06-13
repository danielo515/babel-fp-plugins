module.exports = {
  // presets: [['@babel/env',
  //     {
  //       targets: { node: 8 },
  //       loose: true
  //     }
  //   ]
  //   , [
  //     '@babel/stage-1',
  //     {
  //       decoratorsLegacy: true
  //     }
  //   ]],
  plugins: [
    'babel-plugin-macros'
    ,"pipe-operator-curry"
    , 'babel-plugin-function-composition'
    ,"babel-plugin-implicit-function"
  ]
}