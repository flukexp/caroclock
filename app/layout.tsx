import { Footer, Navbar } from "@/components/index";
import "./globals.css";

export const metadata = {
  title: "Caroclock",
  description: "Discover the best used car.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
