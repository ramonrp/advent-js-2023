export function findFirstRepeated(gifts: number[]) {
  const idSet = new Set();
  for (let id of gifts) {
    if (idSet.has(id)) {
      return id;
    }
    idSet.add(id);
  }
  return -1;
}
