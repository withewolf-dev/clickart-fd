import React, { ReactElement } from "react";
import { ProductCard } from "../cards/productCard";

interface Props {}

export default function MainSection({}: Props): ReactElement {
  return (
    <div className="w(full) h(full)  d(flex) mt(2rem) p(2rem) d(wrap)">
      {Array.from(Array(10).keys()).map((e, index) => (
        <div className="">
          <ProductCard key={index} name="name" image={"image"} price={500} />
        </div>
      ))}
    </div>
  );
}
