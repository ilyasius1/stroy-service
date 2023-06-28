module.exports = {
  presets: ['vite-plugin-babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./resources/js'],
        alias: {
          components: './components',
          elements: './elements',
          pages: './pages',
          img: './assets/img',
        },
      },
    ],
  ],
};
