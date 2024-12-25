/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    },
    cssnano: {
      preset: 'default',
    },
  },
};

export default config;
