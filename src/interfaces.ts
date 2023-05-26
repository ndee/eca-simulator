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
