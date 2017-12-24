import rollupBabel from 'rollup-plugin-babel';
import pkg from './package.json';

const format = process.env.FORMAT;
const es = format === 'es';
const umd = format === 'umd';
const cjs = format === 'cjs';

const getOutput = () => {
    if (es) {
        return {
            file: `dist/ResponsiveTable.es.js`,
            format: 'es',
            sourcemap: true
        };
    } else if (umd) {
        return {
            file: 'dist/ResponsiveTable.umd.js',
            format: 'umd',
            sourcemap: true
        };
    } else if (cjs) {
        return {
            file: 'dist/ResponsiveTable.cjs.js',
            format: 'cjs',
            sourcemap: true
        };
    }
    throw new Error(`invalid format specified: "${format}".`);
};

export default {
    input: './src/ResponsiveTable.js',
    output: getOutput(),
    exports: 'named',
    plugins: [
        rollupBabel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets: ['react', ['es2015', { modules: false }]],
            plugins: ['transform-object-rest-spread', 'external-helpers']
        })
    ],
    external: ['react', 'react-dom', 'prop-types'],
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
    },
    banner: `/* react-responsive-list ${pkg.version} */`
};
