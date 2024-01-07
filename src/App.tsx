import { useState } from "react";

export default function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "san fransico",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: 94112,
      },
    });
  };

  return (
    <>
      <div>
        <h2>state structure</h2>

        <ul>
          <li>Avoid Redundant state variable</li>
          <li>Group related variable inside an object</li>
          <li>
            Aboid deeply nested structure in objects because it is hard to
            update
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <h2>Pure Component</h2>
        <ul>
          <li>
            Pure Component Should return the same result everytime we call the
            component with the same input
          </li>
          <li>
            to keep the component pure keep changes out of the render phase
          </li>
          <li></li>
        </ul>
      </div>
      <div>
        <h2>Updating Objects</h2>
        <ul>
          <li>
            instead of updating an existing state object we should give a brand
            new object
          </li>
          <li>
            if we have multiple properties inside the object and we don't wanna
            rewrite them all we use the spread operator
          </li>
        </ul>

        <p>{drink.price}</p>
        <button
          onClick={() => {
            setDrink({
              ...drink,
              price: 6,
            });
          }}
        >
          Change Price
        </button>
      </div>
      <div>
        <h2>Updating Nested Objects</h2>
        <ul>
          <li>
            instead of updating an existing state object we should give a brand
            new object
          </li>
          <li>
            if we have multiple properties inside the object and we don't wanna
            rewrite them all we use the spread operator
          </li>
        </ul>

        <p>{drink.price}</p>
        <button
          onClick={() => {
            setDrink({
              ...drink,
              price: 6,
            });
          }}
        >
          Change Price
        </button>
      </div>
    </>
  );
}
