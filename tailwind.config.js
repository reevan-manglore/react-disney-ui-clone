/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {
      colors:{
        "background-dark-1":"#040714",
        "background-dark-2":"#090b13",
        "background-blue":"#0063e5",
        
      }
    },
  },
  plugins: [],
}
