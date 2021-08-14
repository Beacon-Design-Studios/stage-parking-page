const { resolve } = require('path');

export default {
  root: './src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'src/index.html'),
        'privacy-policy': resolve(__dirname, 'src/privacy-policy.html'),
        'events': resolve(__dirname, 'src/events.html')
      }
    }
  },
};
