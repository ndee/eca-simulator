import { calculateSatsFromEur } from "./calculateSatsFromEur";
import {
  ExchangeRateType,
  IBuildPurchaseParams,
  IPurchase,
} from "./interfaces";

export async function buildPurchaseList(
  params: IBuildPurchaseParams
): Promise<IPurchase[]> {
  const btcUsdRates = await params.exchangeRateProvider(
    params.requestList.map((r) => r.date),
    ExchangeRateType.BtcToUsd
  );
  const usdEurRates = await params.exchangeRateProvider(
    params.requestList.map((r) => r.date),
    ExchangeRateType.UsdToEur
  );

  const purchases: IPurchase[] = params.requestList.map((request, index) => ({
    date: request.date,
    amountInEur: request.amountInEur,
    btcUsdRate: btcUsdRates[index],
    usdEurRate: usdEurRates[index],
    acquiredSatoshis: calculateSatsFromEur({
      amountInEur: request.amountInEur,
      btcUsdRate: btcUsdRates[index],
      usdEurRate: usdEurRates[index],
    }),
  }));

  return purchases;
}
