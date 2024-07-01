/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'oval-right1': 'circle(100% at 5% 100%)',
        'oval-right2': 'circle(100% at 30% 100%)',
        'oval-right3': 'circle(100% at 10% 80%)',
        wave: 'polygon(0 75%, 100% 25%, 100% 100%, 0% 100%)', // clip-path tanımlaması
      },
      backgroundImage:{
        'image': "url('/img/image 1.png')",
        'image5': "url('/img/image 5.png')",
        // 'text-gradient': 'linear-gradient(to right, #807DFF 40%, #5C4687 70%, #00FFA3 100%)',
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'), // Tailwind clip-path eklentisini ekleyin
  ],
}