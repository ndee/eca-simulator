export function calculateSatsFromEur({
  amountInEur,
  btcUsdRate,
  usdEurRate,
}: {
  amountInEur: number;
  btcUsdRate: number;
  usdEurRate: number;
}): number {
  const amountInUsd = amountInEur / usdEurRate;
  const satoshis = (amountInUsd / btcUsdRate) * 100000000;
  return Math.round(satoshis);
}
