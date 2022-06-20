import { storedTypes } from 'types/Types';

const fetchLocalStorage = (itemName: string): storedTypes => {
  const item: string | null = localStorage.getItem(itemName);
  if (!item) return null;

  const parsedItem: storedTypes = JSON.parse(JSON.stringify(item));
  return parsedItem;
};

export default fetchLocalStorage;
