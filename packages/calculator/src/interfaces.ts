export enum PurchaseRepeat {
  Daily = "Daily",
  Weekly = "Weekly",
  Monthly = "Monthly",
  Yearly = "Yearly",
}

export interface IEcaPurchase {
  purchaseAmountInEur: number;
  purchaseRepeat: PurchaseRepeat;
  purchaseStart: Date;
  purchaseEnd: Date;
}
export interface IEcaResult {
  acquiredSatoshis: number;
  investedEur: number;
}

export interface IPurchaseRequest {
  amountInEur: number;
  date: Date;
}

export interface IPurchase extends IPurchaseRequest {
  btcUsdRate: number;
  usdEurRate: number;
  acquiredSatoshis: number;
  exchangeRateSource?: string;
}

export enum ExchangeRateType {
  BtcToUsd = "BtcToUsd",
  UsdToEur = "UsdToEur",
}

export type ExchangeRateProvider = (
  dates: Date[],
  rateType: ExchangeRateType
) => Promise<number[]>;

export interface IBuildPurchaseParams {
  requestList: IPurchaseRequest[];
  exchangeRateProvider: ExchangeRateProvider;
}
