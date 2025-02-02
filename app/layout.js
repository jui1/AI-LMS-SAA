import { ClerkProvider } from '@clerk/nextjs';
import { Outfit as OutfitFont } from 'next/font/google';  // Renamed to OutfitFont to avoid conflict
import "./globals.css";

const outfit = OutfitFont({ subsets: ['latin'] });  // Renamed the instance to 'outfit'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
