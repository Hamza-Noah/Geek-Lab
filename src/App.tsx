import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./Button";
import ListGroup from "./components/ListGroup";
import Like from "./Like/Like";

export default function App() {
  let items = ["New York", "San Fransico", "Oklahoma", "Tokyo", "London"];

  const handleSelection = (item: string) => {
    console.log(item);
  };

  const [alert, setAlert] = useState(false);
  const [person, setPerson] = useState({
    firstName: "Mohamad",
    age: 26,
  });
  const [customer, setCustomer] = useState({
    name: "john",
    address: {
      city: "San Fransico",
      zipCode: 94111,
    },
  });

  const handleCustomer = () => {
    console.log(customer);
    
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      address: {
        ...prevCustomer.address,
        zipCode: 94112,
      },
    }));

    

    
    console.log(customer.address.zipCode);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelection}
      />
      {alert && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
        >
          This is an alert
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlert(true);
        }}
      >
        Show alert
      </Button>
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      />
      <br />
      <div>{person.firstName + person.age}</div>
      <button
        onClick={() => {
          setPerson({
            ...person,
            firstName: "Hamza",
          });
        }}
      >
        update name
      </button>
      <button onClick={handleCustomer}>Update Customer</button>
    </>
  );
}
