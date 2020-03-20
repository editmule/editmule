import wordcountToPricing from './wordcountToPricing';
import deliveryToPricing from './deliveryToPricing';

export default function subtotalPricing(wordcount: number, delivery: number) {

  const wordcountCost = wordcountToPricing(wordcount);
  const deliveryDiscount = deliveryToPricing(wordcount, delivery);

  return (Number((+wordcountCost + +deliveryDiscount).toFixed(2)));
}
