export default function taxesToPricing(cost: number, taxRate: number) {

  // @ts-ignore
  return Number((cost*taxRate).toFixed(2));
}
