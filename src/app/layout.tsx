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
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
      </head>

      <body>{children}</body>
    </html>
  );
}
