export function pad(num, width = 3) {
  const numInStr = num.toString();
  const len = numInStr.length;
  if (len >= width) {
    return numInStr;
  }
  return `${'0'.repeat(width - len)}${numInStr}`;
}
