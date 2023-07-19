import "./globals.css";

const title = "Nihal Kaul";
const description =
  "Nihal is a software engineer who specializes in building exceptional digital experiences.";

export const metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/about.png" />
      </head>

      <body>{children}</body>
    </html>
  );
}
