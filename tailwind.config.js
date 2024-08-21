/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        "subscribe-btn": ' #D29A5A',
        "services":" #D29A5A",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
