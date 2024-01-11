'use client'

// CaseQtyContext.tsx (Note: Rename from .js to .tsx for TypeScript support)

import React, { createContext, useState, ReactNode } from 'react';

// Add TypeScript types for the context object, including the new value.
type CaseQtyContextType = {
  caseQty: string;
  setCaseQty: (qty: string) => void;
  casePackQTY: string;
  setcasePackQTY: (qty: string) => void;
};

// Update the context object with a default value for casePackQTY and its setter.
export const CaseQtyContext = createContext<CaseQtyContextType>({
  caseQty: '',
  setCaseQty: () => {},
  casePackQTY: '',
  setcasePackQTY: () => {},
});

// Define interface for the provider props which includes children
interface Props {
  children: ReactNode;
}

// Create a provider component that will wrap the parts of your application
// that need access to this context.
export const CaseQtyProvider: React.FC<Props> = ({ children }) => {
  // This state will be shared with all components that consume the context.
  const [caseQty, setCaseQty] = useState<string>('');
  const [casePackQTY, setcasePackQTY] = useState<string>('');

  // Provide the context value to children with the new value and setter.
  return (
    <CaseQtyContext.Provider value={{ caseQty, setCaseQty, casePackQTY, setcasePackQTY }}>
      {children}
    </CaseQtyContext.Provider>
  );
};