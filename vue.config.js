const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://apis.juhe.cn',//聚合接口地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {//重写路径
          '^/api': ''
        }
      },
      '/foo': {
        target: 'https://bang.360.cn',//聚合接口地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {//重写路径
          '^/foo': ''
        }
      },
    }
  }
})
