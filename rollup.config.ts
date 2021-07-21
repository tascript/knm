import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import path from "path"

export default {
  input: path.join(__dirname, 'src/index.ts'),
  output: {
    file: path.join(__dirname, 'public', 'js', 'bundle.js'),
    format: 'iife',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**/*'
    }),
    typescript()
  ]
}
