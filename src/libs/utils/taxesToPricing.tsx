export default function taxesToPricing(cost: number, taxRate: number) {

  // @ts-ignore
  return ((cost*taxRate).toFixed(2));
}
