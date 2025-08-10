import { create } from "zustand";

interface StoreState {
  count1: number;
  count2: number;
  inc1: () => void;
  inc2: () => void;
} 

const useStore = create<StoreState>((set) => ({
  count1: 0,
  count2: 0,
  inc1: () => set((state) => ({ count1: state.count1 + 1 })),
  inc2: () => set((state) => ({ count2: state.count2 + 1 })),
}));

// 구조분해 방식 (모든 상태 변경 시 리렌더)
function AllStateButton() {
  console.log("🔄 AllStateButton 리렌더");
  const { count1, inc1 } = useStore();
  return (
    <div>
      <span>{count1}</span>
      <button onClick={inc1}>Count1 증가</button>
    </div>
  );
}

// 선택 구독 방식 (count2 바뀌어도 리렌더 안됨)
function SelectStateButton() {
  console.log("🔄 SelectStateButton 리렌더");
  const count2 = useStore((state) => state.count2);
  const inc2 = useStore((state) => state.inc2);
  return (
    <div>
      <span>{count2}</span>
      <button onClick={inc2}>Count2 증가</button>
    </div>
  );
}

// App
export default function App() {
  return (
    <div>
      <AllStateButton />
      <SelectStateButton />
    </div>
  );
}
