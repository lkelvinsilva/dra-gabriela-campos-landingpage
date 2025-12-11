import "./globals.css";

export const metadata = {
  title: "Dra Gabriela Campos - Odontologia & Harmonização Facial",
  description:
    "Atendimento especializado em odontologia estética e harmonização facial. Resultados naturais e personalizados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo-gc.jpg" />
      </head>

      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
