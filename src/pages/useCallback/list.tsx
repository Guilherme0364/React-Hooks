import { useState, useEffect } from "react";

interface Item {
  id: number;
  title?: string;
  name?: string;
}

interface ListProps {
  getItems: () => Promise<Item[]>;
}

const List = ({ getItems }: ListProps) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    getItems().then((result: Item[]) => setItems(result));
  }, [getItems]);

  return (
    <>
      {items.map((item) => (
        <p key={item.id}>{item.title || item.name}</p>
      ))}
    </>
  );
};

export { List };
