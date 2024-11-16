/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'safari': '#2A5A3B',
        'sand': '#F5E6D3',
        'ocean': '#2C5282'
      }
    }
  },
  plugins: []
}