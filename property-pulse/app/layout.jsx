import React from "react";
import "@/assets/styles/global.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Property | Find the perfect rental",
  description: "Find your dream rental property",
  keywords: "Rental, find properties",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
