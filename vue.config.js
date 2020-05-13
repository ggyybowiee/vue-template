module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "assets",
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* 代码保存时进行eslint检测 */
  lintOnSave: false,
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api/dc': {
        target: 'http://192.168.10.145:80',
        changeOrigin: true,
        pathRewrite: {
          '^/api/dc': '/api/dc'
        }
      },
      '/api/activity': {
        target: 'http://192.168.10.128:8085',
        changeOrigin: true,
        pathRewrite: {
          '^/api/activity': '/api/activity'
        }
      },
      '/api/portalCore': {
        target: 'http://192.168.10.202:8088',
        // target: 'http://192.168.10.128:8088',
        // target: 'http://192.168.3.111:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api/portalCore': '/api/portalCore'
        }
      },
      '/api/pay': {
        target: 'http://192.168.10.145:8089',
        changeOrigin: true,
        pathRewrite: {
          '^/api/pay': '/api/pay'
        }
      },
      '/api/dealer': {
        target: 'http://192.168.10.101:8899',
        // target: 'http://192.168.10.123:8899',
        changeOrigin: true,
        pathRewrite: {
          '^/api/dealer': '/api/dealer'
        }
      },
      '/api/help': {
        target: 'http://192.168.10.144:8887',
        changeOrigin: true,
        pathRewrite: {
          '^/api/help': 'api/help'
        }
      },
      '/starhome': {
        target: 'http://www.starhome.vip/index.php?route=product/product&path=60&product_id=52',
        changeOrigin: true,
        pathRewrite: {
          '^/starhome': 'http://www.starhome.vip/index.php?route=product/product&path=60&product_id=52'
        }
      },
      '/facebook': {
        target: 'https://www.facebook.com/StarHome.vip',
        changeOrigin: true,
        pathRewrite: {
          '^/facebook': 'https://www.facebook.com/StarHome.vip'
        }
      }
    },
  },
}