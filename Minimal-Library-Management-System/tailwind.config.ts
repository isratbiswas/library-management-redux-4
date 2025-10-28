/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heart: {
          '0%, 100%': { color: 'black' },
          '50%': { color: 'red' },
        },
      },
      animation: {
        heart: 'heart 1s infinite',
      },
    },
  },
  daisyui: {
  themes: true,
  logs: false, // hides daisyUI warnings
},
  plugins: [],
};
