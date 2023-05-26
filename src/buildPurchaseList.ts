import { calculateSatsFromEur } from "./calculateSatsFromEur";
import { IBuildPurchaseParams, IPurchase } from "./interfaces";

export async function buildPurchaseList(
  params: IBuildPurchaseParams
): Promise<IPurchase[]> {
  const purchases: IPurchase[] = [];

  for (let request of params.requestList) {
    const btcUsdRate = await params.getBtcUsdExchangeRate(request.date);
    const usdEurRate = await params.getUsdEurExchangeRate(request.date);
    purchases.push({
      date: request.date,
      amountInEur: request.amountInEur,
      btcUsdRate,
      usdEurRate,
      acquiredSatoshis: calculateSatsFromEur({
        amountInEur: request.amountInEur,
        btcUsdRate,
        usdEurRate,
      }),
    });
  }

  return purchases;
}
