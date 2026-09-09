import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tessfarms.com"),
  title: "Tes Farms | Indian Plants & Fruit Trees in Central Florida",
  description:
    "Alphonso mango, curry leaf, jasmine, guava, parijat & more. Indian plants grown in Central Florida. Serving Lake Nona, St. Cloud, Kissimmee & Orlando.",
  keywords: [
    "Indian plants Florida",
    "Alphonso mango tree Florida",
    "curry leaf plant Orlando",
    "jasmine plant Central Florida",
    "Indian nursery Orlando",
    "Tes Farms",
    "mango tree Kissimmee",
    "parijat plant Florida",
    "guava tree Lake Nona",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tes Farms LLC",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3a36c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${sourceSans.variable}`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
