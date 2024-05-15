/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: ["./src/**/*.{html,js,tsx}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'],
  theme: {
    extend: {},
  },
  plugins: [nextui()]
}

