function manufacture(gifts: string[], materials: string) {
  const materialDistinct = new RegExp(`^[${materials}]+` + "$");

  return gifts.filter((gift) => materialDistinct.test(gift));
}
