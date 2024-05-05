import type { Metadata,Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import 'react-notion-x/src/styles.css'
import "prismjs/themes/prism-tomorrow.css";
import 'katex/dist/katex.min.css'
import '../styles/global.css'
import '../styles/firststyle.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes",
  description: "Created by alok",
  manifest: "/manifest.json",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head/>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
