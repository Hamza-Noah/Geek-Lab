import React from "react";

interface Props {
  cartItemsCount: number;
}

export default function Navbar({ cartItemsCount }: Props) {
  return <div>navbar: {cartItemsCount}</div>;
}
