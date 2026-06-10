import { Cabin } from "next/font/google";
import "./globals.css";
import Preloader from "./_components/Preloader";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ScrollFx from "./_components/ScrollFx";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cabin",
  display: "swap",
});

const SITE = "https://revern.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE),
  title: "REVERN — Precision Hunting Rifles & Field Outfitting",
  description:
    "REVERN builds full-steel hunting rifles the slow way — hand-fitted, field-proven and crafted to last. Discover the Glide, Heritage, Field and Summit lines, plus the Originals Collection of apparel and equipment.",
  keywords: ["REVERN", "hunting rifles", "straight-pull", "field gear", "outdoor apparel", "precision rifles"],
  authors: [{ name: "Paliy" }],
  creator: "Paliy",
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "REVERN",
    title: "REVERN — Precision Hunting Rifles & Field Outfitting",
    description:
      "Full-steel hunting rifles built the slow way, and the Originals Collection of field-proven apparel and gear. A name a century in the making.",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVERN — Precision Hunting Rifles & Field Outfitting",
    description: "Full-steel hunting rifles built the slow way, and the Originals Collection of field gear.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#514122",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cabin.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <noscript><style>{".preloader{display:none}.he{opacity:1;animation:none}"}</style></noscript>
      </head>
      <body>
        {/* signature torn-edge displacement filter */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
          <filter id="revern-rough" x="-3%" y="-3%" width="106%" height="106%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.017" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollFx />
      </body>
    </html>
  );
}
