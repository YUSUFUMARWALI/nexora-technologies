import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yusuf Umar Wali | Nexora Technologies",
  description:
    "Portfolio of Yusuf Umar Wali, founder of Nexora Technologies, software developer, AI enthusiast, and builder of digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
