import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ToastProvider from "@/components/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WatchListed",
  description: "Your Personalized TV Show Recommendation App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href ="images/favicon.ico"/>
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider />
            <main className="bg-gradient-to-r from-[#1B1919] to-[#090909]">
              <Navbar/>
              {children}
            </main>
            <Footer/>
          </ThemeProvider>
        </body>
        
      </html>
    </ClerkProvider>
  );
}