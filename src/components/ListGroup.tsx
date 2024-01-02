import { useState } from "react";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  $active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.$active ? "blue" : "none")};
`;

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  const message = items.length === 0 && <p>"No item found"</p>;
  let [selectedItem, setSelectedItem] = useState(0);

  return (
    <div>
      <h1>{heading}</h1>
      {message}
      <List>
        {items.map((city, i) => (
          <ListItem
          $active={i === selectedItem}
            onClick={(_) => {
              setSelectedItem(i);
              onSelectItem(city);
            }}
           
            key={i}
          >
            {city}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
