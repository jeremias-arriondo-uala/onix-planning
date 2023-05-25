import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import "@/styles/globals.css";

// font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased transition-colors bg-white dark:bg-black min-h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        <Providers>
          <Navbar />
          <main className="container px-4 mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
