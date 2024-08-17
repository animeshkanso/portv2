import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/Scrollbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animesh",
  description: "Hi I am Animesh. I am a creator at heart. Fueled by curiosity and passion for turning ideas into reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-[#101115] min-h-screen text-white`}>
        <ScrollProgressBar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow flex flex-col items-center justify-center">
            {children}
          </main>
          <footer className="flex justify-center py-4">
            <Navbar />
          </footer>
        </div>
      </body>
    </html>
  );
}
