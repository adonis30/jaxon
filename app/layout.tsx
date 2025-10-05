import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Jaxon Investments",
  description:
    "building with you, For Your Domestic and Industrial Power Tools, Hardware, Building Materials, Cement, Rhino Plasters And Boards Plumbing, Agricultural Inputs Irrigation Inputs And Electrical Supplies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
