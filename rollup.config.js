import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/PinchZoomPan.js',
  output: [
    { file: 'dist/PinchZoomPan.mjs', format: 'esm' },
    { file: 'dist/PinchZoomPan.js', format: 'cjs' },
  ],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
    './styles.css',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}
