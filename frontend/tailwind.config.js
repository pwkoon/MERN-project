/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://images.unsplash.com/photo-1435542417350-4d0a3c63afc4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      fontFamily: {
        'header': ["Anek Kannada"]
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }, 
      // colors: {
      //   yellow: "#facc15"
      // },
      // backgroundColor: {
      //   yellow: "#facc15"
      // }
    },
  },
  plugins: [],
}

