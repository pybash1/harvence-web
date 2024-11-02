import "~/styles/globals.css";

import { type Metadata } from "next";
import { plain } from "~/fonts/fonts";

export const metadata: Metadata = {
  title: "Harvence",
  description: "It's about time you start living longer.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plain.className}`}>
      <body>{children}</body>
    </html>
  );
}
