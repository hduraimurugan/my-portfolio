export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'primary': 'rgb(19, 31, 189)',
        'secondary': 'rgb(23, 84, 227)',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/backdrop.jpg')",
      }
    },
    fontFamily:{
      'hero-font': 'Exo',
      'title-font': 'Days One',
      'list-font': 'Josefin Sans',
      'row-font': 'Rowdies',
    }
  },
  plugins: [],
}