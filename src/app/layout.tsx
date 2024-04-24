"use client";
import React from "react";
import Footer from '../components/Footer';
import Navbar from '@/components/Navbar';
import '../../public/styles/global.css';
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <CartProvider>
      <html>
        <body>
          <div className="flex flex-col min-h-screen">
          <Header />
            <div className="flex-grow flex">
              <div className="w-1/4 bg-gray-200">
                <Navbar />
              </div>
              <div className="w-3/4 bg-gray-100 p-4">{children}</div>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </CartProvider>
  );
}

export default RootLayout;