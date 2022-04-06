import resulve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
export default {
  input: 'src/services/aliyun.js',
  output: {
    file: 'services/aliyun.js',
    format: 'cjs',
  },
  plugins: [
    // resulve(),
    commonjs(),
    json(),
    terser(),
    babel({ babelHelpers: 'bundled' }),
  ],
};
