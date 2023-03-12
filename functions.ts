import { Item } from "./item.model";

export const generateReceipt = (items: Item[]): void => {
  let total = 0;
  let totalSalesTax = 0;

  items.forEach((item) => {
    const salesTax = calculateSalesTax(item);
    const priceWithTax = item.price + salesTax;
    total += priceWithTax;
    totalSalesTax += salesTax;

    console.log(`${item.name}: ${priceWithTax.toFixed(2)}`);
  });

  console.log(`Sales Taxes: ${totalSalesTax.toFixed(2)}`);
  console.log(`Total: ${total.toFixed(2)}`);
};

const calculateSalesTax = (item: Item): number => {
  const basic_tax = item.isExempt ? 0 : 10;
  const salesTaxRate = item.isImported ? basic_tax + 5 : basic_tax;
  const salesTax = Math.ceil(((salesTaxRate * item.price) / 100) * 20) / 20;
  return salesTax;
};
