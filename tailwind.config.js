/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow: 'rgb(var(--yellow-primary))',
      black: 'rgb(var(--black-primary))',
      gray: 'rgb(var(--color-gray))',
      golden: 'rgb(var(--color-golden))',
      blue: 'rgb(var(--color-blue))',
      goled: 'rgb(var(--color-goled))',
      brown: 'rgb(var(--color-brown))',
      red: 'rgb(var(--color-red))',
      customGreenStart: '#E8F3EE',
      customGreenEnd: '#C7EFF2',
      customblue: '#00C1FF',
      customdarkblue: '#016FFF',
    },
    extend: {
      backgroundSize: {
        'small': '60%',
        

        'large': 'contain',
        
      },

      backgroundPosition : {
        'large': 'right bottom'
      }

    
    },
  },
  plugins: [],
}
