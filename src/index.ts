import sub from "./sub";
import { createStore } from "redux";

export default class X {
  f() {
    console.log(sub);
  }
  configure(reducer: any): string[] {
    return createStore(reducer);
  }
}
