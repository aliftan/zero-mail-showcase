import "./globals.css";

export const metadata = {
  title: "Zero Mail Showcase",
  description: "A collection of email templates for various scenarios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}