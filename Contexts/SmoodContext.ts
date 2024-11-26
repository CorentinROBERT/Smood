import { createContext } from 'react';

interface SmoodContextType {
  setAddress: (address: any) => void;
}

export const SmoodContext = createContext<SmoodContextType>({
  setAddress: () => {},
});
