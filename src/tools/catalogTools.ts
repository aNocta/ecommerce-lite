const numberToArray = (n: number): number[] => {
  const result: number[] = [];
  for (let x = 0; x <= n; x++) {
    result.push(x);
  }
  return result;
};

const sliceArray = <T>(arr: T[], start: number, end: number): T[] => {
  return arr.filter((v, i) => i >= start && i <= end);
};

export { numberToArray, sliceArray };
