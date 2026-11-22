import "./globals.css";

export const metadata = {
  title: "Pangasinan Hidden Gems | Discover Pangasinan",
  description:
    "Discover the hidden beaches, natural wonders, and beautiful destinations of Pangasinan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}