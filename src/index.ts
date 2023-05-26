import { getBitcoinPrice } from "./getBitcoinPrice";

const day = new Date(2021, 9, 3);
getBitcoinPrice(day).then((price) => {
  console.log(
    `The price of Bitcoin at ${day.toDateString()} was: ${price} USD`
  );
});
