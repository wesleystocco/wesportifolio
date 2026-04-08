import { CustomCursor } from "@/components/ui/CustomCursor";
import type { Metadata } from "next";
import { Fira_Code, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wesley Stocco | Desenvolvedor Full-stack e IA",
  description:
    "Estrutura visual inicial do portfolio Wesley Stocco com Next.js, Supabase, Vercel e uma identidade imersiva em construcao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
