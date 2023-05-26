import { calculateSatsFromEur } from "./calculateSatsFromEur";
import { IBuildPurchaseParams, IPurchase } from "./interfaces";

export async function buildPurchaseList(
  params: IBuildPurchaseParams
): Promise<IPurchase[]> {
  const purchases: IPurchase[] = [];

  for (let request of params.requestList) {
    const exchangeRateBtcUsd = await params.getBtcUsdExchangeRate(request.date);
    const exchangeRateUsdEur = await params.getUsdEurExchangeRate(request.date);
    purchases.push({
      date: request.date,
      amountInEur: request.amountInEur,
      exchangeRateBtcUsd,
      exchangeRateUsdEur,
      acquiredSatoshis: calculateSatsFromEur({
        amountInEur: request.amountInEur,
        btcUsdRate: exchangeRateBtcUsd,
        exchangeRateUsdEur,
      }),
    });
  }

  return purchases;
}
