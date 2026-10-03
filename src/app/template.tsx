import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-page-fade w-full">
      {children}
    </div>
  );
}
