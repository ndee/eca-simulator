import moment from "moment";
import { IEcaPurchase, IPurchaseRequest, PurchaseRepeat } from "./interfaces";

export function buildPurchaseRequestList(
  ecaPurchase: IEcaPurchase
): IPurchaseRequest[] {
  if (ecaPurchase.purchaseStart > ecaPurchase.purchaseEnd) {
    throw new Error(
      "Purchase start date cannot be later than purchase end date"
    );
  }
  const requests: IPurchaseRequest[] = [];
  let purchaseMoment = moment(ecaPurchase.purchaseStart);

  while (purchaseMoment.date() < ecaPurchase.purchaseEnd.getDate()) {
    switch (ecaPurchase.purchaseRepeat) {
      case PurchaseRepeat.Yearly:
        purchaseMoment.add(1, "year");
        break;
      case PurchaseRepeat.Monthly:
        purchaseMoment.add(1, "month");
        break;
      case PurchaseRepeat.Weekly:
        purchaseMoment.add(1, "week");
        break;
      case PurchaseRepeat.Daily:
        purchaseMoment.add(1, "day");
        break;
    }
    requests.push({
      amountInEur: ecaPurchase.purchaseAmountInEur,
      date: purchaseMoment.toDate(),
    });
  }

  return requests;
}
