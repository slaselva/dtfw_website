module.exports = {
  content: [
    "public/*.html"
  ],
  theme: {
    screens: {
      "xs": "375px",
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1366px",
      "3xl": "1440px",
      "4xl": "1920px",
      "5xl": "2000px"
    },
    colors: {
      "white": "#fafafa",
      "off-white": "#F5F4F4",
      "black": "#0A0A0A",
      "grey-6": "#2E2E2E",
      "grey-4": "#1a1a1a",
      "dark-grey": "#212121",
      "grey": "#727272",
      "light-grey": "#DADAD2",
      "dark-blue": "#1E2944",
      "blue": "#6AA2B9"
    },
    fontFamily: {
      futura: ["futura", "sans-serif"],
      futuraCondensed: ["futura-condensed", "sans-serif"],
      sourceSansPro: ["source-sans-pro", "sans-serif"],
      bebasNeue: ["bebas-neue", "sans-serif"],
    },
    extend: {
      spacing: {
        "1/6": "16.666667%",
      },
      maxWidth: {
        "layout": "100rem",
      },
      keyframes: {
        "logo-fade-out": {
          '0%': { opacity: "1" },
          '50%': { opacity: "1" },
          '100%': { opacity: "0" },
        },
        "logo-fade-in": {
          '0%': { opacity: "0" },
          '50%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
      },
      animation: {
        "logo-fade-out": "logo-fade-out 1.5s ease-out 1s forwards",
        "logo-fade-in": "logo-fade-in 2s ease-out 1s forwards",
      },
    },
  },
  plugins: [],
}
