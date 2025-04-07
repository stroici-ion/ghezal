export const numberToPrice = (x: number) => {
  return x.toLocaleString('ro-MD', {
    style: 'currency',
    currency: 'MDL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
