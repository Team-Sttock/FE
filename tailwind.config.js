module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nexon': ['NEXON LV2 Gothic', 'sans-serif'],
        'hahmlet': ['Hahmlet', 'sans-serif'],
        'kimjungchul': ['Kimjungchul Gothic', 'sans-serif'],
      },
      colors: {
        "light-brown": "#9f8772",
        "dark-brown": "#665a48",
        "beige": "#ebe4d9",
        "ivory": "#f6f4ef",
      },
    },
  },
  plugins: [],
}
