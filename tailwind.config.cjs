/** @type {import('tailwindcss').Config} */

module.exports = {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        greatvibes: ['GreatVibes'],
        gillsansnovaabook: ['GillSansNovaBook'],
        mademirage: ['MadeMirage'],
      },
      colors:  {
        dark: '#404041',
        light: '#f6f2ef',
        primary:'#f9b534',
        secondary:'#9f4896',
        playing: '#e3d9d4',
        active: '#e12207',
        list: '#f6f2f0',
        text: '#262626',
        spinner: '#0000ff',
        call:'#2196F3',
        btnColor:'#2992C4'
    },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
