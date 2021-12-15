import React, { ReactElement } from "react";
import "../../App.css";
interface Props {}

export default function SearchSection({}: Props): ReactElement {
  return (
    <div>
      <h1>CLickARt</h1>
      <div className="d(flex) ai(c)">
        <input
          placeholder="search item"
          style={{ outline: "none" }}
          className="w(full) h(50px) br(40px) pl(2rem) pr(2rem)"
        />
        <button className="h(50px) w(50px)  br(c) d(flex) jc(c) ai(c) p(015rem) cursor(pointer) ml(1rem) ">
          search
        </button>
      </div>
    </div>
  );
}
