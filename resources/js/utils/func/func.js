export function formattedPrice(string) {
  return new Intl.NumberFormat('ru-RU').format(string);
}
