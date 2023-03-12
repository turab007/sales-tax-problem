import { Item } from "./item.model";

// Example usage
const basket1: Item[] = [
  { name: "1 book", price: 12.49, isImported: false, isExempt: true },
  { name: "1 music CD", price: 14.99, isImported: false, isExempt: false },
  { name: "1 chocolate bar", price: 0.85, isImported: false, isExempt: true },
];

const basket2: Item[] = [
  {
    name: "1 imported box of chocolates",
    price: 10.0,
    isImported: true,
    isExempt: true,
  },
  {
    name: "1 imported bottle of perfume",
    price: 47.5,
    isImported: true,
    isExempt: false,
  },
];

const basket3: Item[] = [
  {
    name: "1 imported bottle of perfume",
    price: 27.99,
    isImported: true,
    isExempt: false,
  },
  {
    name: "1 bottle of perfume",
    price: 18.99,
    isImported: false,
    isExempt: false,
  },
  {
    name: "1 packet of headache pills",
    price: 9.75,
    isImported: false,
    isExempt: true,
  },
  {
    name: "1 box of imported chocolates",
    price: 11.25,
    isImported: true,
    isExempt: true,
  },
];
