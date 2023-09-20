/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        // => @media (min-width: 320px) { ... }

        'xs': '390px',
        // => @media (min-width: 390px) { ... }

        'sm': '576px',
        // => @media (min-width: 575px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 992px) { ... } 

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1366px',
        // => @media (min-width: 1440px) { ... }

        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }
        '4xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      dropShadow: {
        '3xl': '0px 0px 15px rgba(0, 0, 0, 0.15)',
      },
      boxShadow: {
        '3xl': '0px 4px 15px 2px rgba(0, 0, 0, 0.13)',
        '4xl': '0px 4px 12px 5px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        "avenir": 'avenir_regularregular',
        "avenir-demo": 'avenirheavy',
        "avenir-medium": 'avenirheavy',
        "avenir-bold": 'avenirblack',
        "georgia": 'georgiaregular',
      },
      fontSize: {
        "text-13": ["13px", "18.2px"],
        "text-34": ["34px", "47.6px"],
      },
      colors: {
        "d-color": "#131E29",
        "red-1": "#B2173B",
        "gray-1": "#E8E8E8",
        "gray-3": "#A0A2A3",
        "hover-red": "#8E122F",
        'gray-1000': '#64696F',
        'light-white': 'rgba(0, 0, 0, 0.05)',
        'gray-1100': '#B9B9B9',
      },

    },
    backgroundImage: {
      'bg-clr': ' linear-gradient(90deg, rgba(142,18,47,0) 0%, rgba(142,18,47,1) 100%)',
    },
  },
  plugins: [require('flowbite/plugin')],
}

