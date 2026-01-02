/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aniron': ['Aniron', 'system-ui', 'sans-serif'],
        'ringbearer': ['RingbearerMedium', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
