// @ts-nocheck

import wordcountToPricing from './wordcountToPricing';

export default function deliveryToPricing(wordcount: number, delivery: any) {
  const cost = wordcountToPricing(wordcount);
  let discountRate = 0;

  delivery = Number(delivery);

  if (delivery==24) {
    discountRate = 0;
  } else if (delivery==48) {
    discountRate = -0.15;
  } else if (delivery==72) {
    discountRate = -0.25;
  }

  const discount = cost*discountRate

  return Number((discount).toFixed(2));
}
