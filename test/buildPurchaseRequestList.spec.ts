import { buildPurchaseRequestList } from "../src/buildPurchaseRequestList";
import { PurchaseRepeat } from "../src/interfaces";

describe("buildPurchaseRequestList", () => {
  describe("should calculate list for", () => {
    it("weekly plan", () => {
      expect(
        buildPurchaseRequestList({
          purchaseAmountInEur: 10,
          purchaseStart: new Date("2022-01-01"),
          purchaseEnd: new Date("2022-05-26"),
          purchaseRepeat: PurchaseRepeat.Weekly,
        })
      ).toMatchSnapshot();
    });
  });
});
