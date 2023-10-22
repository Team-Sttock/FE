module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
        "mint": "#c8dbbe",
      },
      boxShadow: {
        desktop: '3px 3px 7px 0 rgba(102,90,72,0.1)',
      },
    },
  },
  plugins: [],
}
