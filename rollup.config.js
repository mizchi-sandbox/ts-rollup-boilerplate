import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify-es";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: pkg.main
    },
    {
      format: "es",
      file: pkg.module
    }
  ],
  plugins: [
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true
    }),
    commonjs({ extensions: [".js", ".ts"] }),
    uglify()
  ]
};
