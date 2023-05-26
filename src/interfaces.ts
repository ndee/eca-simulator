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

export type ExchangeRateProvider = (date: Date) => Promise<number>;

export interface IBuildPurchaseParams {
  requestList: IPurchaseRequest[];
  getBtcUsdExchangeRate: ExchangeRateProvider;
  getUsdEurExchangeRate: ExchangeRateProvider;
}
