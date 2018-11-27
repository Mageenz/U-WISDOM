const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
        .loader('pug-plain-loader')
        .end()
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    }
  }
  // baseUrl: process.env.NODE_ENV === 'production' ? '/adminadmin/' : '/',
  // devServer: {
  //   proxy: {
  //     '/manage': {
  //       target: 'http://99.69gu.com',
  //       changeOrigin: true
  //     }
  //   }
  // }
}