import { create } from 'zustand';

type CursorType = 'default' | 'withText' | 'withBig' | 'button';

interface CursorState {
  type?: CursorType;
  text?: string;

  setCursor: (
    type: CursorType,
    text?: string,
    divRef?: React.RefObject<HTMLDivElement | null> | null,
  ) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  type: 'default',
  text: '',

  setCursor: (type = 'default', text = '') => set({ type, text }),
}));
