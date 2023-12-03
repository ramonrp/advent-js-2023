function findNaughtyStep(original: string, modified: string) {
  const [larger, shorter] =
    original.length >= modified.length
      ? [original, modified]
      : [modified, original];

  return larger.split("").find((char, i) => char !== shorter?.[i]) ?? "";
}
