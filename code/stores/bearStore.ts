import { create } from "zustand";

interface BearState {
  bears: number;
  addBear: () => void;
  removeBear: () => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  removeBear: () => set((state) => ({ bears: state.bears - 1 })),
}));
