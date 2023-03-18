/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '402': '402px',
        '764': '764px',
        '816': '816px',
        '834': '834px',
      },
      text: {
        '11': '11px',
        '14': '14px',
        '32': '32px',
      },
      mt: {
        '38': '38px',
        '75': '75px',
        '67': '67px',
        '30': '30px',
      },
      px: {
        '10': '10px',
      },
    },
  },
  plugins: [],
}
