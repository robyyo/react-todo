import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "React ToDo App",
  description: "Simple React and MongoDB ToDo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <div className="min-h-full">
          {/* Header */}
          <header className="flex justify-between p-4 w-full border-b">
            <h2 className="text-2xl">Header</h2>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </header>
      </div>
      </body>
    </html>
  );
}
