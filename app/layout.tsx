import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>trans-zoomer-lator</title>
      </head>
      <body className="bg-gray-200">{children}</body>
    </html>
  );
}
