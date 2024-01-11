module.exports = {
  mount: {
    src: '/',
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
  ],
  buildOptions: {
    out: 'dist'
  },
};
