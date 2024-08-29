export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .2s infinite"
      },

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