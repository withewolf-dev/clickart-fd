import { Button } from "@mui/material";
import * as React from "react";

export interface IProductDetailsProps {}

export default function ProductDetails(props: IProductDetailsProps) {
  return (
    <div className="h(full) bgc(grey200) w(20rem) d(flex) d(flex-col) jc(sb) ai(c)">
      <div className="w(350px)">
        <h1>Suilvien Quilted Jacket is my </h1>
        <h3>34,400</h3>
      </div>
      <div className="w(350px">
        <div>Product info</div>
        <div>details</div>
        <div>delivery & return </div>
      </div>
      <div className="m(1rem)">
        <span>icon</span>
        <Button variant="contained" color="secondary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
