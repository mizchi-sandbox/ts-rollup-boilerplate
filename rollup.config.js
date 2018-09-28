import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";

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
  plugins: [typescript({}), commonjs({ extensions: [".js", ".ts"] })]
};
