import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: "dist/bundle.js"
    },
    {
      format: "esm",
      file: "dist/bundle.esm.js"
    }
  ],
  // dest: "./dist/bundle.js",
  plugins: [
    typescript({ module: "CommonJS" }),
    commonjs({ extensions: [".js", ".ts"] }) // the ".ts" extension is required
  ]
};
