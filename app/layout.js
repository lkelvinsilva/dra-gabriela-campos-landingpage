import "@/styles/custom.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Dra. Gabriela Campos",
  description: "Odontologia estética e harmonização facial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#F4E7E4] text-[#3A3A3A] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
