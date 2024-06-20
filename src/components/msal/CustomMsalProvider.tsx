'use client'

import { useEffect } from "react";
import { initializeMsal, msalInstance } from "@/lib/msft/msal";
import { MsalProvider } from "@azure/msal-react"

export default function CustomMsalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeMsal();
  }, []);

  return (
    <MsalProvider instance={msalInstance}>
      {children}
    </MsalProvider>
  );
};