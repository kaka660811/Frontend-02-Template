module.export = {
    entry:{

    },
    module: {
        rules: [
           {
               test: /\.js$/,
                use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env'],
                       plugins: [[
                           '@babel/plugin-transform-react-jsx',
                           {pragma: 'createElement'}
                       ]]
                   }
                } 
           },
           {
               test: /\.view/,
               use: {
                   loader: require.resolve("./myloader.js")
               }
           },
           {
               test: /\.css$/,
               use: {
                   loader: require.resolve('./cssloader.js')  //require.resovle到底干了什么
               }
           }
        ]
    },
    mode: 'development'
}