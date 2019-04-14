import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";


export default {
  input: 'js/app.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env'],
    }),
    uglify()
  ]
}