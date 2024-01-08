'use client'

// CaseQtyContext.js

import React, { createContext, useState } from 'react';

// Create a context object with a default value.
export const CaseQtyContext = createContext({
  caseQty: 0,
  setCaseQty: (qty: number) => {},
});

// Create a provider component that will wrap the parts of your application
// that need access to this context.
export const CaseQtyProvider = ({ children }) => {
  // This state will be shared with all components that consume the context.
  const [caseQty, setCaseQty] = useState<number>(0); // TypeScript type

  // Provide the context value to children.
  return (
    <CaseQtyContext.Provider value={{ caseQty, setCaseQty }}>
      {children}
    </CaseQtyContext.Provider>
  );
};