export function price(price: number) {
  return Number.parseFloat(`${price / 100}`).toFixed(2);
}
