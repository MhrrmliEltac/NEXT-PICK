String.prototype.toCustom = function (): string {
  const word = this.toString();
  if (!word) return word;

  return word[0].toLocaleUpperCase() + word.slice(1);
};
