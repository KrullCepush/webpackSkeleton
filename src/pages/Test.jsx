import React, { useState } from "react";

export function Test() {
  const [value, setValue] = useState(null);

  if (!value) {
    setValue("World");
  }

  return <div className="f-title-2">{value}</div>;
}
