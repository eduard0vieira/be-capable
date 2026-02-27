import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Be.Capable | Agência de Marketing",
  description:
    "Estratégias inteligentes, criatividade e performance para gerar resultados reais para o seu negócio.",
  openGraph: {
    title: "Be.Capable | Agência de Marketing",
    description:
      "Estratégias inteligentes, criatividade e performance para gerar resultados reais para o seu negócio.",
    type: "website",
    images: [
      {
        url: "/seo-be-capable.png",
        width: 1200,
        height: 630,
        alt: "Be.Capable Agência de Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Be.Capable | Agência de Marketing",
    description:
      "Estratégias inteligentes, criatividade e performance para gerar resultados reais para o seu negócio.",
    images: ["/seo-be-capable.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
