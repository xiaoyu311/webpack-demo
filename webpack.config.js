const path = require('path')//webpack核心模块，专门解析文件路径
const webpack = require('webpack')//引入webpack

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),//打包出放到哪个文件夹
    //console.log(path.resolve(__dirname, "dist")) => C:\Users\xiaoyu\Desktop\webpage-demo\dist
    //console.log(__dirname) => C:\Users\xiaoyu\Desktop\webpage-demo  在哪打开就是哪   一直表示相对路径
    filename: "bundle.js",
    publicPath: "dist/"//没有这句话 引入的图片会差一级dist
  },
  resolve: {
     extensions: [".js", ".json", ".jsx", ".css"],//解析这些文件，补齐后缀   这些文件就可以省略后缀，没有后缀他自己去尝试，
  },
  devtool: "source-map",
  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。
  module: {
    rules: [//rules规则 loader增强器
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader" },//webpack文件打包碰到.js结尾的文件  先用babel-loader处理
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },//可以打包css，功能比较强大
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,//打包img
        use: 'file-loader?name=[name]-[hash:5].[ext]&outputPath=images/'
      }//outputPath=images 图片打包到images文件下
    ]
  },
  plugins: [//插件
    new webpack.optimize.UglifyJsPlugin({//压缩js代码
      compress: {//new一个webpack 需要导入wenpack
        warnings: false,//清除警告 空格 之类的东西
        drop_console: false,
      }
    })
  ]
}
