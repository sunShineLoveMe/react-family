const path = require('path');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		path.join(__dirname, 'src/index.js')
	],
	output: {
		path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
	},
	module: {
     rules: [{
         test: /\.js$/,
         use: ['babel-loader?cacheDirectory=true'],
         include: path.join(__dirname, 'src')
     },
     	{
		   test: /\.css$/,
		   use: ['style-loader', 'css-loader']
		},
		{
		    test: /\.(png|jpg|gif)$/,
		    use: [{
		        loader: 'url-loader',
		        options: {
		            limit: 8192
		        }
		    }]
		}
     ]
  },
  devServer: {
  		port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
   resolve: {
   	alias: {
   		pages: path.join(__dirname, 'src/pages'),
   		component: path.join(__dirname, 'src/component'),
   		router: path.join(__dirname, 'src/router'),
   		actions: path.join(__dirname, 'src/redux/actions'),
        reducers: path.join(__dirname, 'src/redux/reducers')
   	}
   },
   devtool: 'inline-source-map'
};