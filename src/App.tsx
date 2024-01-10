import { useState } from "react";
import Navbar from "./Components/SharingState/navbar";
import Cart from "./Components/SharingState/Cart";
import Form from "./Components/Form/Form";

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

  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JS",
    "React",
    "Boostrap",
    "JQuery",
    "Angular",
    "SCSS",
    "Tailwind",
  ]);

  const updateSkills = () => {
    setSkills([...skills, "Vue"]);
  };

  const removeSkill = () => {
    setSkills(skills.filter((skill) => skill != "Vue"));
  };

  const editSkill = () => {
    setSkills(
      skills.map((skill) =>
        skill == "HTML" ? "HTML5" : skill == "CSS" ? "CSS3" : skill
      )
    );
  };

  // Sharing state between components

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const fixBug = () => {
    setBugs(
      bugs.map((bug) => {
        return bug.id == 1 ? { ...bug, fixed: true } : bug;
      })
    );
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
            the spread operator in JS is shallow which means when we use it to
            copy an element and there is a property in it, its going to return
            us the address in memeory of that object
          </li>
          <li>
            so we need to avoid deeply nested structure in state objects cause
            the deeper the structure gets the more complicated our update logic
            will be so prefer a flat structure instead of a deeply nested
            structure
          </li>
        </ul>

        <p>{drink.price}</p>
        <button onClick={handleClick}>Change Price</button>
      </div>
      <div>
        <h2>Updating Arrays</h2>
        <ul>
          <li>
            the same concept applies to arrays we should not add or remove an
            item of the array instead we should give a brand new array
          </li>
        </ul>
        <p>
          {skills.map((skill, i) => (
            <span key={`skill number ${i}`}>{skill}, </span>
          ))}
        </p>

        <button onClick={updateSkills}>Update Skills</button>
        <button onClick={removeSkill}>Remove a Skill</button>
        <button onClick={editSkill}>Edit a Skill</button>
      </div>
      <div>
        <h2>Updating Array of Objects</h2>
        <ul>
          <li></li>
        </ul>
      </div>
      <hr />
      <div>
        <h2>Sharing state between </h2>
        <Navbar cartItemsCount={cartItems.length} />
        {/* Apply OnRemove product later */}
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>

      {/* Building Forms section */}
      <section>
        <Form />
      </section>
    </>
  );
}
