import { calculateSatsFromEur } from "../src/calculateSatsFromEur";

describe("calculateSatsFromEur", () => {
  describe("should calculate it right for", () => {
    it.each([
      [1, 1, 1, 100000000],
      [100, 1, 1, 10000000000],
      [40000, 40000, 1, 100000000],
      [24920.74, 26753.41, 0.93, 100161043],
      [100, 26706.73, 0.93, 402621],
    ])(
      "amountInEur: %f,  btcUsdRate: %f, usdEurRate: %f, acquiredSatoshis: %f",
      (amountInEur, btcUsdRate, usdEurRate, acquiredSatoshis) => {
        expect(
          calculateSatsFromEur({
            amountInEur,
            btcUsdRate,
            usdEurRate,
          })
        ).toEqual(acquiredSatoshis);
      }
    );
  });
});
