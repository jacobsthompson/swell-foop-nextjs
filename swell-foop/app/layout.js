import "./globals.css";

export const metadata = {
  title: "Swell Foop",
  description: "Swell Foop is an Indie Rock Band based in Berkeley, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
