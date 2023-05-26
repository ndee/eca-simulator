import { buildPurchaseList } from "../../src/calculateAcquiredBitcoin/buildPurchaseList";
import { ExchangeRateProvider, IPurchaseRequest } from "../../src/interfaces";

describe("buildPurchaseList", () => {
  let btcUsdRateProviderMock: ExchangeRateProvider;
  let usdEurRateProviderMock: ExchangeRateProvider;
  beforeEach(() => {
    btcUsdRateProviderMock = jest
      .fn()
      .mockResolvedValueOnce(10000)
      .mockResolvedValueOnce(20000)
      .mockResolvedValueOnce(30000)
      .mockResolvedValueOnce(40000);
    usdEurRateProviderMock = jest
      .fn()
      .mockResolvedValueOnce(1)
      .mockResolvedValueOnce(0.9)
      .mockResolvedValueOnce(0.8)
      .mockResolvedValueOnce(0.7);
  });
  it("should run", async () => {
    const requests: IPurchaseRequest[] = [
      {
        amountInEur: 100,
        date: new Date("2020-01-01"),
      },
      {
        amountInEur: 100,
        date: new Date("2021-01-01"),
      },
      {
        amountInEur: 100,
        date: new Date("2022-01-01"),
      },
      {
        amountInEur: 100,
        date: new Date("2023-01-01"),
      },
    ];
    expect(
      await buildPurchaseList({
        requestList: requests,
        getBtcUsdExchangeRate: btcUsdRateProviderMock,
        getUsdEurExchangeRate: usdEurRateProviderMock,
      })
    ).toMatchSnapshot();
  });
});
