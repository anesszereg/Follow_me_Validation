
const path = require('path');

module.exports = {
  entry: './src/Js/script.js',  // Update this path if your entry file is different
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'production', // or 'development'
};
