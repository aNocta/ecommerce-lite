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

const arrayToSet = <T extends { id: number }>(arr: T[]): T[] => {
  return arr.reduce((prev: T[], curr) => {
    if (prev.some((v) => v.id === curr.id)) return prev;
    return [...prev, curr];
  }, []);
};

const countOfItem = <T extends { id: number }>(
  arr: T[],
  id: number
): number => {
  return arr.filter((x) => x.id === id).length;
};

export { numberToArray, sliceArray, arrayToSet, countOfItem };
