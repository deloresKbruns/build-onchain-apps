import { Memo } from '../types';
import { MemoCard } from './MemoCard';

type MemosProps = {
  memos: Memo[];
};

/**
 * Memos received from coffee purchases in BuyMeACoffee smart contract.
 * https://github.com/alchemyplatform/RTW3-Week2-BuyMeACoffee-Contracts/blob/main/contracts/BuyMeACoffee.sol#L28C18-L29C1
 * @param memos List of memos.
 */
function Memos({ memos }: MemosProps) {
  if (!memos) return null;
  return (
    <div className="flex flex-col gap-2">
      {memos.map((memo) => {
        return (
          <MemoCard
            key={memo.timestamp.toString()}
            name={memo.name}
            message={memo.message}
            timestamp={memo.timestamp}
          />
        );
      })}
    </div>
  );
}

export { Memos };