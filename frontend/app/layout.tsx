import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import PokemonSearchBar from "@/components/pokemon/PokemonSearchBar";

export const metadata: Metadata = {
  title: "Gengar's Haunted Mansion",
  description: "Haunted Mansion Home Page",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
