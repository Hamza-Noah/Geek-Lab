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

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelection}
      />
      {alert && <Alert onClose={() => {setAlert(false)}}>This is an alert</Alert>}
      <Button
        color="primary"
        onClick={() => {
          setAlert(true);
        }}
      >
        Show alert
      </Button>
      <Like onClick={()=> {console.log("clicked");
      }}/>
    </>
  );
}
