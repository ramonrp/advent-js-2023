function manufacture(gifts: string[], materials: string) {
  return gifts.filter((gift) =>
    gift.split("").every((letter) => materials.includes(letter))
  );
}
