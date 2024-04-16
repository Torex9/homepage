"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} box-border m-0`}>
        <Header
          logoSrcurl="/logo.svg"
          menuIconUrl="/icon-menu.svg"
          closeMenuIconUrl="/icon-menu-close.svg"
          links={[
            { text: "Home", url: "" },
            { text: "New", url: "" },
            { text: "Popular", url: "" },
            { text: "Trending", url: "" },
            { text: "Categories", url: "" },
          ]}
        />

        {children}
      </body>
    </html>
  );
}
