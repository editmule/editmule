import { wordcountToPricing } from 'libs/utils';

export default function calculateSavings(wordcount: number) {
  const oldPricing = wordcount*0.10;
  const newPricing = wordcountToPricing(wordcount);

  //@ts-ignore
  return (((oldPricing-newPricing)/(oldPricing)*100).toFixed(0))
}
