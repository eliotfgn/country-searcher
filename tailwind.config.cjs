/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      fontWeight: {
          'base': "300",
          'semi-bold': "600",
          'bold': "800"
      },
    extend: {
        colors: {
            "dark-blue": "hsl(209, 23%, 22%)",
            "very-dark-blue": "hsl(207, 26%, 17%)",
            "very-dark-blue-text": "hsl(200, 15%, 8%)",
            "dark-gray": "hsl(0, 0%, 52%)",
            "light-gray": "hsl(0, 0%, 98%)",
        },
        fontFamily: {
            "nunito": "Nunito"
        }
    },
  },
  plugins: [],
}
