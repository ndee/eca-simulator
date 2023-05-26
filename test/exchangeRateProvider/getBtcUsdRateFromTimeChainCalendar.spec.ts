import { getBtcUsdRateFromTimeChainCalendar } from "../../src/exchangeRateProvider/getBtcUsdRateFromTimeChainCalendar";

describe("getBtcRateFromTimeChainCalendar", () => {
  it("should return the correct BTC rate in USD for a certain day", async () => {
    expect(
      await getBtcUsdRateFromTimeChainCalendar(new Date(2021, 9, 3))
    ).toMatchInlineSnapshot(`47675`);
  });
});
