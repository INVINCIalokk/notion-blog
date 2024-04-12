import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-notion-x/src/styles.css'
import "prismjs/themes/prism-tomorrow.css";
import 'katex/dist/katex.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alok Choudhary",
  description: "This is a blog where I provide all the textbook solutions and basic concepts for SSC boards in India. It aims to help students prepare for exams by providing step-by-step explanations and clear solutions. Whether you're looking for basic concepts or detailed solutions to practice questions, this blog is here to help.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{margin: 0}} className={inter.className}>{children}</body>
    </html>
  );
}
