import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MaintenancePage from "./maintenance/page";

import "./globals.css";
import { MAINTENANCE_MODE } from "@/constants/configs-variables";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRDPH South Sudan",
  description: "Center for Research and Development in Population Health",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (MAINTENANCE_MODE) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <MaintenancePage />
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
