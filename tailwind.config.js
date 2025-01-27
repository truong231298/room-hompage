/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'DarkGray': 'hsl(0, 0%, 63%)',
        'Black': 'hsl(0, 0%, 0%)',
        'White': 'hsl(0, 0%, 100%)',
        'VeryDarkGray': 'hsl(0, 0%, 27%)'
      },
      backgroundImage:{
        "desktop-img1": "url('/images/desktop-image-hero-1.jpg')",
        "desktop-img2": "url('/images/desktop-image-hero-2.jpg')",
        "desktop-img3": "url('/images/desktop-image-hero-3.jpg')",
        "mobile-img1": "url('/images/mobile-image-hero-1.jpg')",
        "mobile-img1": "url('/images/mobile-image-hero-2.jpg')",
        "mobile-img1": "url('/images/mobile-image-hero-3.jpg')",
      }
    },
  },
  plugins: [],
}