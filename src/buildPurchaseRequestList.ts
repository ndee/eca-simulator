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

  while (purchaseMoment.isBefore(moment(ecaPurchase.purchaseEnd))) {
    let momentUnit: moment.unitOfTime.DurationConstructor;
    switch (ecaPurchase.purchaseRepeat) {
      case PurchaseRepeat.Yearly:
        momentUnit = "year";
        break;
      case PurchaseRepeat.Monthly:
        momentUnit = "month";
        break;
      case PurchaseRepeat.Weekly:
        momentUnit = "week";
        break;
      case PurchaseRepeat.Daily:
        momentUnit = "day";
        break;
    }
    purchaseMoment.add(1, momentUnit);
    requests.push({
      amountInEur: ecaPurchase.purchaseAmountInEur,
      date: purchaseMoment.toDate(),
    });
  }

  return requests;
}
