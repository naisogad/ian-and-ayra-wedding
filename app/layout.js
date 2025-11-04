import "./globals.css";
import localFont from 'next/font/local';
import { Lobster } from 'next/font/google';

const georgia = localFont({ src: './fonts/Georgia.woff2'})

const brilliant = localFont({ src: './fonts/Calligraphy Brilliant.ttf' })


const greatVibes = Lobster({
  subsets: ["latin"], weight: ["400"]
})

export const metadata = {
  title: "Ian & Ayra’s Wedding 💍",
  description: "Join us as we celebrate the union of Ian and Ayra — view details, RSVP, and more.",
  openGraph: {
    title: "Ian & Ayra’s Wedding 💍",
    description: "A celebration of love. See the wedding details here!",
    url: "https://ian-and-ayra-wedding.vercel.app",
    siteName: "Ian & Ayra Wedding",
    images: [
      {
        url: "https://ian-and-ayra-wedding.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ian & Ayra Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian & Ayra’s Wedding 💍",
    description: "Join us in celebrating the union of Ian and Ayra.",
    images: ["https://ian-and-ayra-wedding.vercel.app/og-image.jpg"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${brilliant.className} ${georgia.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
