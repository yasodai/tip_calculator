// const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "Space-Mono": ["Space Mono", "monospace"],
      },
      colors: {
        cyan: {
          darkest: `#3d6666`,
          darker: `#00474b`,
          lightest: `#c5e4e7`,

          focus: `#26c2ae`,
          icon: `#9ebbbd`,
          label: `#5e7a7d`,
          "text-field": `#f3f9fa`,
        },
      },
    },
  },
  plugins: [],
};
