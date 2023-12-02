function manufacture(gifts: string[], materials: string) {
  const distinctMaterials = new Set(materials.split(""));

  return gifts.filter((gift) => {
    const giftMaterials = new Set([...gift.split(""), ...distinctMaterials]);
    return giftMaterials.size === distinctMaterials.size;
  });
}
