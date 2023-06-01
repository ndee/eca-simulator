import { IEcaPurchase, IEcaResult } from "../interfaces";

export async function calculateAcquiredBitcoin(
  ecaPurchase: IEcaPurchase
): Promise<IEcaResult> {
  return { acquiredSatoshis: 1234, investedEur: 12 } as IEcaResult;
}
