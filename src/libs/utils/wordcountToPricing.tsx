
export default function wordcountToPricing(wordcount: number) {

  let rate = 0;
  if (wordcount <= 75) {
    rate = 0.10;
  } else if (wordcount <= 200) {
    rate = 0.07;
  } else if (wordcount <= 300) {
    rate = 0.066;
  } else if (wordcount <= 500) {
    rate = 0.054;
  } else if (wordcount <= 1000) {
    rate = 0.05;
  } else if (wordcount <= 5000) {
    rate = 0.047;
  } else {
    rate = 0.045;
  }

  return ((wordcount*rate).toFixed(2));
}
