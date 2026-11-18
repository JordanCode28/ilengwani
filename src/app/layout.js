
import "./globals.css";

export const metadata = {
  title: "ILENGWANI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}