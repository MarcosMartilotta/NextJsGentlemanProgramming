import "./tailwind-global.css";
import StyledComponentsRegistry from "./lib/registry";
//En todos lados donde quiera usar styled components va a tener que ser use client.
//Usarlo en componentes que no tengan fetch etc. Igual styled components en next no conviene

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>{" "}
      </body>
    </html>
  );
}
