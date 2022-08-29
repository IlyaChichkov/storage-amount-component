/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
      './src/**/*.{vue, js, css}'
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway','sans-serif']
    },
    extend: {
      colors: {
        'pale-blue': '#DDDBFFFF',
        'blue-grayish': '#848794FF',
        'dark-blue-100': '#1D2C67FF',
        'dark-blue-200': '#0C122CFF',
        'gd-main': '#FFA399FF',
        'gd-sec': '#FF4D97FF',
      },
    },
  },
  plugins: [],
}
