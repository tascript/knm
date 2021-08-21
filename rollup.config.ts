import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import serve from 'rollup-plugin-serve'

export default {
  input: path.join(__dirname, 'src/index.ts'),
  output: {
    file: path.join(__dirname, 'public', 'js', 'bundle.js'),
    format: 'iife',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    svelte({
      emitCss: false,
      preprocess: sveltePreprocess()
    }),
    babel({
      exclude: 'node_modules/**/*',
      extensions: ['.ts']
    }),
    serve({
      contentBase: 'public',
      host: 'localhost',
      port: 3000,
    })
  ]
}
