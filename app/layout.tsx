// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ScrollObserver from "@/utils/scroll-observer";
import SizeObserver from "@/utils/size-observer";

export const metadata: Metadata = {
  title: "NailsWithShady",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SizeObserver>
          <ScrollObserver>{children}</ScrollObserver>
        </SizeObserver>
      </body>
    </html>
  );
}
