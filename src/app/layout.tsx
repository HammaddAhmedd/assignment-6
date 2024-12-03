import type { Metadata } from "next";

import "./globals.css";
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets:["latin"], weight:["400","700"] } );


export const metadata: Metadata = {
  title: "Page Design",
  description: "Page Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        
        {children}
        
      </body>
    </html>
  );
}
