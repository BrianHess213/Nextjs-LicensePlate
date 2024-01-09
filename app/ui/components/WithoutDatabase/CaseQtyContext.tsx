'use client'

// CaseQtyContext.js

import React, { createContext, useState } from 'react';

// Add TypeScript types for the context object, including the new value.
type CaseQtyContextType = {
  caseQty: number;
  setCaseQty: (qty: number) => void;
  casePackQTY: number; // The new value
  setcasePackQTY: (qty: number) => void; // The setter for the new value
};

// Update the context object with a default value for casePackQTY and its setter.
export const CaseQtyContext = createContext<CaseQtyContextType>({
  caseQty: 0,
  setCaseQty: () => {},
  casePackQTY: 0, // Default value for casePackQTY
  setcasePackQTY: () => {}, // Default empty function
});

// Create a provider component that will wrap the parts of your application
// that need access to this context.
export const CaseQtyProvider: React.FC = ({ children }) => {
  // This state will be shared with all components that consume the context.
  const [caseQty, setCaseQty] = useState<number>(0); // The original state
  const [casePackQTY, setcasePackQTY] = useState<number>(0); // State for the new value

  // Provide the context value to children with the new value and setter.
  return (
    <CaseQtyContext.Provider value={{ caseQty, setCaseQty, casePackQTY, setcasePackQTY }}>
      {children}
    </CaseQtyContext.Provider>
  );
};