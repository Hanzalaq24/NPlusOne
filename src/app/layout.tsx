import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'NPlusOne - Women\'s Fashion',
  description: 'Premium women\'s wear shopping platform',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-custom-black">
        <Header />
        <main className="flex-grow pt-20 md:pt-24 w-full max-w-[100vw] overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 