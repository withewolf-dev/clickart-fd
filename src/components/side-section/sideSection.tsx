import React, { ReactElement, useState } from "react";
import CtgButton from "../button/ctgButton";

interface Props {}

export default function SideSection({}: Props): ReactElement {
  return (
    <div className="w(20rem)  d(n-sm) h(full) jc(c) d(flex)">
      <div className="d(inline)">
        <h1> Category</h1>
        <div className="bgc(grey100) w(250px) h(500px) ta(c) p(015rem) ">
          <CtgButton text={"clothing"} />
          <CtgButton text={"electronics"} />
          <CtgButton text={"house hold"} />
        </div>
      </div>
    </div>
  );
}
