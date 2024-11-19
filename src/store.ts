// src/store.ts
import { create } from 'zustand';

// Definimos los tipos del estado
interface Store {
    count: number;
    increment: () => void;
    decrement: () => void;
}

// Creamos el store con los tipos
export const useStore = create<Store>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));
