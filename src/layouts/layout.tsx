import * as React from "react";
import Header from "../components/header/header";

interface ILayoutProps {
  children: any;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
