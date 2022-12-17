export const uniq = <
  T extends {
    [key: string]: any;
  }
>(
  array: T[],
  prop: string = "id"
): T[] => [...new Map(array.map((item) => [item[prop], item])).values()];

export const formatStarCount = (count: number): string => {
  if (count < 1000) return String(count);

  return `${(count / 1000).toFixed(1)}k`;
};
