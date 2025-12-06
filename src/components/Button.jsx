export default function Button({ children, href = "#", className = "" }) {
  return (
    <a href={href} className={`inline-block px-8 py-3 rounded-xl shadow-lg text-white bg-[#6B1F3A] hover:bg-[#8C3A54] transition ${className}`}>
      {children}
    </a>
  );
}


