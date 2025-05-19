import React from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo/>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
