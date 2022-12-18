export const uniq = <
  T extends {
    [key: string]: any;
  }
>(
  array: T[],
  prop: string = "id"
): T[] => [...new Map(array.map((item) => [item[prop], item])).values()];

export const formatCount = (count?: number): string | number => {
  if (!count) return 0;
  if (count < 1000) return count;

  return `${(count / 1000).toFixed(1)}k`;
};
