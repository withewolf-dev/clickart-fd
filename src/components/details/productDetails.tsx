import { Button, IconButton } from "@mui/material";
import * as React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
      <div className="m(1rem) d(flex) jc(c) ai(c)">
        <IconButton>
          <FavoriteBorderIcon className="b(grey200) br(c) p(1rem)" />
        </IconButton>
        <Button variant="contained" className="br(20px) w(250px)">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
