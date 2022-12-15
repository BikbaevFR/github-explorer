export const uniq = <
  T extends {
    [key: string]: any;
  }
>(
  array: T[],
  prop: string = "id"
): T[] => [...new Map(array.map((item) => [item[prop], item])).values()];
