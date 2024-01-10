import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

export default function cart({ cartItems, onClear }: Props) {
  return (
    <>
      {cartItems.map((product) => {
        return <span key={product}>{product}</span>;
      })}
      <br />
      <button onClick={onClear}>Clear Cart</button>
    </>
  );
}
