module.exports = {
    content: ["./src/**/*.{html,js}", "./**/*.{html,js}"], // Cover all paths
    theme: {
      extend: {
        fontFamily: {
          kskdsfsd: ["Bungee Tint", 'sans-serif'],
          ggggg: ["Bodoni Moda SC", 'serif'],
          robotoslab: ["Roboto Slab", 'serif'],
          bebas: ["Bebas Neue", 'sans-serif']
        },
        fontWeight: {
          bold: '700', // You can use any custom name or just `700`
        },
        fontSize: {
          'xxl': ['2.5rem', { lineHeight: '1.2' }], // Example for larger font size
        },
      },
    },
    plugins: [],
  }