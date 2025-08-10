import { useBearStore } from "./stores/bearStore";

export default function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  const addBear = useBearStore((state) => state.addBear);
  const removeBear = useBearStore((state) => state.removeBear);

  return (
    <div>
      <h1>곰 수: {bears}</h1>
      <button onClick={addBear}>곰 추가</button>
      <button onClick={removeBear}>곰 제거</button>
    </div>
  );
}
