import * as React from "react";

export interface IProductImageDetailProps {}

export default function ProductImageDetail(props: IProductImageDetailProps) {
  return (
    <div className="h(full) bgc(grey100) w(50rem) d(flex) ai(c) jc(c)">
      <img className="p(2rem)" src="images/pic.png" />
    </div>
  );
}
