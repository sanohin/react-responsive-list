const { ROLLUP } = process.env;

module.exports = {
    presets: ['react', ['es2015', { modules: false }]],
    plugins: ['transform-object-rest-spread'].concat(
        ROLLUP ? ['external-helpers'] : []
    )
};
