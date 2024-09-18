import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (imagePath) => {
    setItems((prevItems) => prevItems.filter((item) => item.image !== imagePath));
  };

  const toggleItem = (item) => {
    const exists = items.some((existingItem) => existingItem.image === item.image);

    if (exists) {
      removeItem(item.image);
    } else {
      addItem(item);
    }
  };

  return <ItemContext.Provider value={{ items, addItem, removeItem, toggleItem }}>{children}</ItemContext.Provider>;
};
