import * as React from "react";
import ProductDetails from "../../components/details/productDetails";
import ProductImageDetail from "../../components/details/productImageDetail";
import Layout from "../../layouts/layout";

export interface IProductProps {}

export function Product(props: IProductProps) {
  return (
    <Layout>
      <div className="d(flex) jc(c) w(full)">
        <ProductDetails />
        <ProductImageDetail />
      </div>
    </Layout>
  );
}
