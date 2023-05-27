import { buildPurchaseRequestList } from "../../src/acquiredSatoshiCalculator/buildPurchaseRequestList";
import { PurchaseRepeat } from "../../src/interfaces";

describe("buildPurchaseRequestList", () => {
  it("should fail when start date is after end date", () => {
    expect(() =>
      buildPurchaseRequestList({
        purchaseAmountInEur: 1000,
        purchaseStart: new Date("2023-05-27"),
        purchaseEnd: new Date("2023-05-26"),
        purchaseRepeat: PurchaseRepeat.Yearly,
      })
    ).toThrow();
  });
  describe("should calculate list for a", () => {
    it("yearly plan", () => {
      expect(
        buildPurchaseRequestList({
          purchaseAmountInEur: 1000,
          purchaseStart: new Date("2010-01-01"),
          purchaseEnd: new Date("2022-05-26"),
          purchaseRepeat: PurchaseRepeat.Yearly,
        })
      ).toMatchSnapshot();
    });
    it("monthly plan", () => {
      expect(
        buildPurchaseRequestList({
          purchaseAmountInEur: 100,
          purchaseStart: new Date("2021-01-01"),
          purchaseEnd: new Date("2022-05-26"),
          purchaseRepeat: PurchaseRepeat.Monthly,
        })
      ).toMatchSnapshot();
    });
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
    it("daily plan", () => {
      expect(
        buildPurchaseRequestList({
          purchaseAmountInEur: 1,
          purchaseStart: new Date("2022-03-01"),
          purchaseEnd: new Date("2022-05-26"),
          purchaseRepeat: PurchaseRepeat.Daily,
        })
      ).toMatchSnapshot();
    });
  });
});
