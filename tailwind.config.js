/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        primary: "#f44336",
        secondary: "#fff3f3",
        accent: "#",
      },
      fontFamily: {
        sans: "Poppins",
      },
      screens: {
        lg: "992px",
      },
      listStyleType: {
        disc: "disc",
        decimal: "decimal",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
    },
  },
  plugins: [],
};
