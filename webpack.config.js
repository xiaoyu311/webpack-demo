const path = require('path')//webpack核心模块，专门解析文件路径

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),//打包出放到哪个文件夹
    //console.log(path.resolve(__dirname, "dist")) => C:\Users\xiaoyu\Desktop\webpage-demo\dist
    //console.log(__dirname) => C:\Users\xiaoyu\Desktop\webpage-demo  在哪打开就是哪   一直表示相对路径
    filename: "bundle.js"
  },
  module: {
    rules: [//rules规则 loader增强器
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }//webpack文件打包碰到.js结尾的文件  先用babel-loader处理
    ]
  }
}
