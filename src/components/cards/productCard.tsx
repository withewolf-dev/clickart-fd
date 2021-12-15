import * as React from "react";

export interface IProductCardProps {
  name: string;
  price: number;
  image: string;
}

export function ProductCard({ name, price, image }: IProductCardProps) {
  return (
    <div className="m(1rem) cursor(pointer)">
      <div className="h(500px) w(350px) bgc(grey200) ">
        <img className="h(500px) w(350px) of(c) " src="../../images/pic.png" />
      </div>
      <strong>Suliven Quite Jacket</strong>
      <div>
        <span>&#8377;</span>
        <p>5666,88</p>
      </div>
    </div>
  );
}
