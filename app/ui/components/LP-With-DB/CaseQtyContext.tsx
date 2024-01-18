'use client'

// CaseQtyContext.js

import React, { createContext, useState, ReactNode } from 'react';

// Create a context object with a default value.
export const CaseQtyContext = createContext({
  caseQty: 0,
  setCaseQty: (qty: number) => {},
});

// Define interface for the provider props which includes children
interface Props {
  children: ReactNode;
}

// Create a provider component that will wrap the parts of your application
// that need access to this context.
export const CaseQtyProvider: React.FC<Props> = ({ children }) => {
  // This state will be shared with all components that consume the context.
  const [caseQty, setCaseQty] = useState<number>(0); // TypeScript type

  // Provide the context value to children.
  return (
    <CaseQtyContext.Provider value={{ caseQty, setCaseQty }}>
      {children}
    </CaseQtyContext.Provider>
  );
};