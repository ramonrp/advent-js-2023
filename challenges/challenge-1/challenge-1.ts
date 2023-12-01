export function findFirstRepeated(gifts: number[]) {
  const idMap: Record<number, boolean> = {};
  for (let id of gifts) {
    if (idMap[id]) {
      return id;
    }
    idMap[id] = true;
  }
  return -1;
}
