import "./globals.css";

export const metadata = {
  title: "Nihal Kaul",
  description:
    "Nihal Kaul is a software engineer who specializes in building exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
