import React from "react";
//requiers Libery
import { Test } from "@pages/Test";
//components
import "~/styles/styles.scss";
//styles

export function App() {
  return (
    <div className="">
      <div className="f-title">Hello</div>
      <Test text="World" />
    </div>
  );
}
