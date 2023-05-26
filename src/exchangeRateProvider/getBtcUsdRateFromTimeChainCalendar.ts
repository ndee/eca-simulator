import axios from "axios";
import { ExchangeRateProvider } from "src/interfaces";

export const getBtcUsdRateFromTimeChainCalendar: ExchangeRateProvider = async (
  date: Date
) => {
  const timestamp = date.getTime();
  const blocksAroundTimestampResponse = await axios.get(
    `https://corsproxy.io/?https%3A%2F%2Fblockchain.info%2Fblocks%2F${timestamp}%3Fformat%3Djson`
  );
  const blockHeight = blocksAroundTimestampResponse.data[0].height;
  const priceResponse = await axios.get(
    `https://tcc.qrsnap.io/block/${blockHeight}/price`
  );
  const price = priceResponse.data.result.price;
  return price;
};
