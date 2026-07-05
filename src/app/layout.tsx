import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora-technologies-mauve.vercel.app"),
  title: "Nexora Technologies | Building Technology That Creates Real-World Impact",
  description:
    "Nexora Technologies builds modern websites, mobile apps, AI solutions, automation systems and digital products for businesses, startups, NGOs and institutions.",
  keywords: [
    "Nexora Technologies",
    "Yusuf Umar Wali",
    "Software Development Nigeria",
    "AI Solutions",
    "Mobile App Development",
    "Web Development",
    "Flutter Developer",
    "Next.js Developer",
    "Digital Products",
  ],
  openGraph: {
    title: "Nexora Technologies",
    description:
      "Building technology that creates real-world impact through web, mobile, AI and automation.",
    url: "https://nexora-technologies-mauve.vercel.app",
    siteName: "Nexora Technologies",
    images: [
      {
        url: "/images/profile/yusuf.png",
        width: 1200,
        height: 630,
        alt: "Nexora Technologies",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Technologies",
    description:
      "Building technology that creates real-world impact through web, mobile, AI and automation.",
    images: ["/images/profile/yusuf.png"],
  },
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

