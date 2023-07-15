import { Metadata } from 'next';
import Head from 'next/head';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'trans-zoomer-lator',
  description: 'Zommer to boomer and vice versa crisp translation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body className="bg-gray-200">{children}</body>
    </html>
  );
}
