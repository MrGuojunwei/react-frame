const devServer = {
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    open: true,
    overlay: true,
    port: 1000,
    stats: "errors-only",
    useLocalIp: true,
    proxy: {

    }
}

module.exports = devServer;