import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
