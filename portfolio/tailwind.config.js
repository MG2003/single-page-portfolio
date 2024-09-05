/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx, mdx}"],
  theme: {
    
    extend: {
      fontFamily: {
        inter: 'Inter, sans serif',
        space_mono: "Space mono, monospace",
        jmono: "Jetbrains mono, monospace"
      },
      colors: {
        primary: '#fce0de',  
        secondary: '#14181c'
      }
    },
  },
  plugins: [],
}

