module.exports = {
  presets: [
      [ 'babel-preset-vite'],
      // [
      //     '@babel/preset-env',
      // ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./resources/js'],
        alias: {
          components: './components',
          elements: './elements',
          pages: './pages',
          img: '../assets/img',
        },
      },
    ],
  ],
};
