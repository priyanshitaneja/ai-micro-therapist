import type { Metadata } from "next";
import "./globals.css";

// Using system fonts as fallback for deployment issues
// const poppins = Poppins({
//   variable: "--font-poppins", 
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   display: 'swap',
//   fallback: ['system-ui', 'arial'],
// });

export const metadata: Metadata = {
  title: "Mood Tracker - Your Personal Mental Health Companion",
  description: "Track your daily mood and get personalized insights from your micro-therapist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
