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
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased transition-colors bg-white dark:bg-black min-h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        <main className="container px-4 mx-auto">{children}</main>
      </body>
    </html>
  );
}
