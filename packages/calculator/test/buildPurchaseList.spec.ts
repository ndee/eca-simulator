import { buildPurchaseList } from "../src/buildPurchaseList";
import { ExchangeRateProvider, IPurchaseRequest } from "../src/interfaces";

describe("buildPurchaseList", () => {
  let rateProviderMock: ExchangeRateProvider;
  beforeEach(() => {
    rateProviderMock = jest.fn().mockResolvedValue([1, 2, 3, 4, 5, 6]);
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
        exchangeRateProvider: rateProviderMock,
      })
    ).toMatchSnapshot();
  });
});
