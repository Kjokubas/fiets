import { Plus_Jakarta_Sans, Playfair_Display, Dancing_Script } from "next/font/google";
import { getLocalBusinessSchema } from "@/lib/metadata";
import "./globals.css";
import "./animations.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cursive",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Fietsspecialist Rotterdam | Fietsenwinkel 2e Middellandstraat",
    template: "%s | Fietsspecialist Rotterdam",
  },
  description:
    "Uw fietsspecialist in Rotterdam-West. Verkoop, reparatie en onderhoud van stadsfietsen, e-bikes, kinderfietsen en meer. 7 dagen per week geopend. Scherpe prijzen, deskundig advies.",
  keywords: [
    "fietsenwinkel rotterdam",
    "fietsspecialist rotterdam",
    "fiets kopen rotterdam",
    "fiets reparatie rotterdam",
    "e-bike rotterdam",
    "fietsenmaker rotterdam west",
    "fietsenwinkel middelland",
    "fiets onderhoud rotterdam",
  ],
  authors: [{ name: "Fietsspecialist Rotterdam" }],
  openGraph: {
    title: "Fietsspecialist Rotterdam | Fietsenwinkel Rotterdam-West",
    description:
      "Verkoop, reparatie en deskundig advies. 7 dagen per week geopend op de 2e Middellandstraat.",
    url: "https://fietsspecialistrotterdam.nl",
    siteName: "Fietsspecialist Rotterdam",
    locale: "nl_NL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "NL-ZH",
    "geo.placename": "Rotterdam",
    "google": "notranslate",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${dancingScript.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
