import React from "react";

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <header>
        <h1>Documents</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
