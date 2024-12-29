import React from "react";

import { Metadata } from "next";

import "@/globals.css";
import cn from "@/utils/cn";
import plusJakartaSans from "@/fonts/font";

export const metadata: Metadata = {
  title: "Propel",
  description: "An Open Learning Platform",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased bg-background text-foreground",
          plusJakartaSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
