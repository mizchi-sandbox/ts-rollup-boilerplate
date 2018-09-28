import { createStore } from "redux";
import sub from "./sub";

export default class X {
  f() {
    console.log(sub);
  }
  configure(reducer: any): string[] {
    return createStore(reducer);
  }
}
