import sub from "./sub";

const _: any = require("lodash");

export default class X {
  f() {
    console.log(sub);
  }
  flatten(ret: string[][]): string[] {
    return _.flatten(ret);
  }
}
