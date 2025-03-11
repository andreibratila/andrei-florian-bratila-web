import { create } from 'zustand';

type CursorType = 'default' | 'withText' | 'withBig' | 'button';

interface CursorState {
  type?: CursorType;
  text?: string;

  // mouse: {
  //   x: number;
  //   y: number;
  // };
  setCursor: (
    type: CursorType,
    text?: string,
    divRef?: React.RefObject<HTMLDivElement | null> | null,
  ) => void;
  // setMouse: (x: number, y: number) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  type: 'default',
  text: '',

  // mouse: { x: -100, y: -100 },
  setCursor: (type = 'default', text = '') => set({ type, text }),
  // setMouse: (x, y) =>
  //   set(() => {
  //     return { mouse: { x, y } }; // Solo actualizar valores x, y
  //   }),
}));
