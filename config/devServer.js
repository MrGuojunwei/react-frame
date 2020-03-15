const devServer = {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: true,
    overlay: true,
    port: 1000,
    quiet: true,
    stats: {
        warning: true,
        buildAt: true,
        errors: true,
        assets: true
    },
    proxy: {

    }
}

module.exports = devServer;